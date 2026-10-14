#!/usr/bin/env python3
"""Render the production host/carousel in isolated, nonpersistent macOS WebKit.

Run separately: python3 Tests/SafariCarouselWebKitTests.py
Requires macOS/Python 3/Swift; never opens Safari, activates a window or captures
screen content. All images, tab IDs and titles are generated fixtures.
"""
from pathlib import Path
import base64
import json
import subprocess
import tempfile

root = Path(__file__).resolve().parents[1]
assets = root / 'MakeItHome/MakeItHome Web Extension/Resources/assets'
host = root / 'MakeItHome/Resources/assets/appExtensionView.html'
payload = '<style>' + (assets / 'swiper.css').read_text() + '</style><script>' + (assets / 'swiper.min.js').read_text() + '</script>' + (assets / 'extension.html').read_text()
encoded = base64.b64encode(payload.encode()).decode()
fixture = r'''
import AppKit
import WebKit

class Fixture: NSObject, WKNavigationDelegate {
    let view: WKWebView
    var reloaded = false
    init(configuration: WKWebViewConfiguration) {
        view = WKWebView(frame: NSRect(x: 0, y: 0, width: 400, height: 1000), configuration: configuration)
        super.init()
    }
    func start() {
        view.navigationDelegate = self
        let url = URL(fileURLWithPath: HOST)
        view.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
    }
    func js(_ code: String, _ then: @escaping () -> Void) {
        // Do not return DOM nodes/functions: WebKit cannot bridge those values.
        view.evaluateJavaScript(code + ";null") { _, error in
            if let error { print("FAIL WebKit carousel:", error); exit(1) }
            then()
        }
    }
    func after(_ then: @escaping () -> Void) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.7, execute: then)
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        js("""
        window.statuses=[];window.focusRequests=[];
        window.sendStatus=value=>statuses.push(JSON.parse(value));
        window.focusOnMe=value=>focusRequests.push(JSON.parse(value));
        window.fixtureContent=PAYLOAD;
        window.recoveryPosition=\(reloaded ? "{id:3,index:2}" : "null");
        createAppExtension('com.apple.Safari');setContent('com.apple.Safari',fixtureContent);
        showAppExtension('com.apple.Safari',false);
        const canvas=document.createElement('canvas');canvas.width=640;canvas.height=360;
        const context=canvas.getContext('2d');context.fillStyle='#5085c7';context.fillRect(0,0,640,360);
        window.frameLandscape=canvas.toDataURL('image/jpeg').split(',')[1];
        canvas.width=360;canvas.height=640;context.fillRect(0,0,360,640);
        window.framePortrait=canvas.toDataURL('image/jpeg').split(',')[1];
        window.infos=Array.from({length:10},(_,i)=>({id:i+1,title:'Tab '+(i+1)+' — cached preview title'}));
        infos[2].title='<img src=x onerror="window.injected=true"> — title is literal text '+ 'LongTitle'.repeat(40);
        window.populate=()=>{syncSafariTabs(infos,recoveryPosition);applySafariScreenshots(infos.map(tabInfo=>({tabInfo,blob:tabInfo.id%2?frameLandscape:framePortrait})))};
        window.expect=(condition,message)=>{if(!condition)throw Error(message)};
        window.check=(count,id)=>{
            expect(vars.safari.slides.length===count,'Preview count changed');
            expect(!window.injected,'Title executed HTML');
            if(!count)return;
            const swiper=vars.safari.swiper, slide=swiper.slides[swiper.activeIndex];
            expect(Number(slide.getAttribute('tabId'))===id,'Selection was lost');
            for(const tab of Object.values(vars.safari.tabs)){
                expect(tab.img.naturalWidth>0 && !tab.img.hidden,'Preview did not decode');
                expect(tab.title.textContent===tab.info.title,'Visible title is missing');
            }
            const image=slide.querySelector('img').getBoundingClientRect();
            const title=slide.querySelector('.safari-tab-title').getBoundingClientRect();
            const card=slide.getBoundingClientRect();
            expect(title.width>0 && title.height>=29,'Title row collapsed');
            expect(title.bottom<=card.bottom+0.5 && title.top>=card.top,'Title outside card');
            expect(title.left>=card.left-0.5 && title.right<=card.right+0.5,'Long title overflows card width');
            expect(image.bottom<=title.top+0.5,'Preview overlaps title');
        };
        populate();
        """) { self.after {
            if self.reloaded { self.verifyReload() } else { self.normalReopen() }
        } }
    }
    func normalReopen() {
        js("check(10,1);clickedOnSafariTab(3);exitingAppExtension();document.getElementById('com-apple-Safari').style.display='none';") {
            self.after {
                self.js("syncSafariTabs(infos.map(tab=>({...tab,active:tab.id===3})));applySafariScreenshots([{tabInfo:infos[2],blob:framePortrait}]);showAppExtension('com.apple.Safari',false);") {
                    self.after { self.recoverContent() }
                }
            }
        }
    }
    func recoverContent() {
        js("""
        check(10,3);
        expect(focusRequests.length===1,'Click was repeated');
        expect(statuses.filter(status=>status.type==='safariViewReady').at(-1).previewIds.length===10,'Reopen failed to report retained previews');
        const originalSwiper=vars.safari.swiper, originalSlide=vars.safari.tabs[3].slide, originalImage=vars.safari.tabs[3].img;
        createAppExtension('com.apple.Safari');setContent('com.apple.Safari',fixtureContent);
        expect(vars.safari.swiper===originalSwiper && vars.safari.tabs[3].slide===originalSlide,'Identical content rebuilt the carousel');
        applySafariScreenshots([{tabInfo:infos[2],blob:framePortrait}]);
        expect(vars.safari.tabs[3].img===originalImage,'Duplicate frame replaced a cached image');
        // A real source update reattaches the bounded runtime nodes and order.
        setContent('com.apple.Safari',btoa(unescape(encodeURIComponent(decodeContent(fixtureContent)+'<!--updated-->'))));
        expect(vars.safari.tabs[3].slide===originalSlide,'Changed content discarded reusable previews');
        expect(vars.safari.order.join()===infos.map(tab=>tab.id).join(),'Changed content lost order');
        exitingAppExtension();setContent('com.apple.Safari',fixtureContent,true);showAppExtension('com.apple.Safari',false);
        check(0,3);
        expect(statuses.filter(status=>status.type==='safariViewReady').at(-1).previewIds.length===0,'Recovery did not report missing previews');
        populate();
        """) { self.after { self.resizeHorizontal() } }
    }
    func resizeHorizontal() {
        js("""
        check(10,3);
        window.stableSwiper=vars.safari.swiper;
        document.getElementById('safariTabs').dispatchEvent(new WheelEvent('wheel',{deltaY:60,bubbles:true,cancelable:true}));
        window.gestureTranslate=vars.safari.swiper.translate;
        window.extraInfo={id:901,title:'New tab during navigation'};
        syncSafariTabs([...infos,extraInfo]);applySafariScreenshots([{tabInfo:extraInfo,blob:frameLandscape}]);
        expect(vars.safari.slides.length===10,'Card membership changed during wheel navigation');
        expect(vars.safari.swiper===stableSwiper,'Navigation rebuilt the carousel');
        expect(Math.abs(vars.safari.swiper.translate-gestureTranslate)<0.5,'Incoming card interrupted wheel position');
        """) { self.after {
            self.js("""
            check(11,3);
            expect(Math.abs(vars.safari.swiper.translate-gestureTranslate)<0.5,'Settled update lost fractional scroll position');
            expect(vars.safari.swiper===stableSwiper,'Settled update recreated the carousel');
            syncSafariTabs(infos);
            """) { self.after { self.resizeAfterGesture() } }
        } }
    }
    func resizeAfterGesture() {
        js("check(10,3);exitingAppExtension();") {
            self.view.setFrameSize(NSSize(width: 1400, height: 200))
            self.js("showAppExtension('com.apple.Safari',true);") {
                self.after {
                    self.js("check(10,3);exitingAppExtension();") {
                        self.view.setFrameSize(NSSize(width: 300, height: 700))
                        self.js("showAppExtension('com.apple.Safari',false);") {
                            self.after { self.finish() }
                        }
                    }
                }
            }
        }
    }
    func finish() {
        js("""
        check(10,3);
        // Repeated updates while hidden must not consume or corrupt previews.
        exitingAppExtension();
        for(let i=0;i<25;i++)applySafariScreenshots([{tabInfo:infos[2],blob:i%2?framePortrait:frameLandscape}]);
        showAppExtension('com.apple.Safari',false);
        """) { self.after {
            self.js("check(10,3)") {
                // Actual document replacement clears host visibility and JS
                // state. Native restores show; browser replays its saved ID,
                // metadata and only the reported missing runtime frames.
                self.reloaded = true
                self.start()
            }
        } }
    }
    func verifyReload() {
        js("""
        check(10,3);
        expect(isShowing && !isHorizontal,'Reload lost presentation or orientation');
        const ready=statuses.find(status=>status.type==='safariViewReady');
        expect(ready && !ready.inventoryReady && ready.previewIds.length===0,'New document did not request cache recovery');
        expect(new Set(vars.safari.slides.map(slide=>slide.id)).size===10,'Recovery duplicated cards');
        """) {
            print("SafariCarouselWebKitTests: PASS (real host/Swiper, JPEG decode, click/reopen, content/reset/order, gestures, orientation, long titles, hidden replacements, document reload recovery)")
            exit(0)
        }
    }
}
NSApplication.shared.setActivationPolicy(.prohibited)
let configuration = WKWebViewConfiguration()
configuration.websiteDataStore = .nonPersistent()
let fixture = Fixture(configuration: configuration)
fixture.start()
DispatchQueue.main.asyncAfter(deadline: .now() + 30) { print("FAIL WebKit carousel: timeout"); exit(1) }
NSApplication.shared.run()
'''.replace('HOST', json.dumps(str(host))).replace('PAYLOAD', json.dumps(encoded))
with tempfile.TemporaryDirectory(prefix='mih-safari-webkit-') as temp:
    source = Path(temp) / 'CarouselTests.swift'
    binary = Path(temp) / 'CarouselTests'
    source.write_text(fixture)
    subprocess.run(['swiftc', str(source), '-o', str(binary)], check=True)
    subprocess.run([str(binary)], check=True, timeout=40)

//
//  BarView.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 06/11/22.
//

import SwiftUI

struct MenuBarView: View {
    @State private var currentSensivity : Double
    @State private var dockSlowering : Bool
    @State private var requireAcceleration : Bool
    @State private var maxApps : Int
    @State private var disableDockSide : Bool
    @State private var launchAtStartup : Bool
    @State private var showInDock : Bool
    @State private var enableDragDropDetection : Bool
    
    @State private var isUnauthorized : Bool
    
    @State private var appVersion : String
    
    @State private var thisDisplayDisable : Bool
    @State private var thisDisplayEnableLeft : Bool
    @State private var thisDisplayEnableRight : Bool
    @State private var thisDisplayEnableBottom : Bool
    @State private var thisDisplayEnableTop : Bool
    
    var body: some View {
        VStack{
            GroupBox(label:
                Label("Display settings (\(workingDisplay.screen.localizedName))", systemImage: "display")
            ) {
                VStack(alignment: .center){
                    Toggle("\(Image(systemName: "lock")) Disable on this display", isOn: $thisDisplayDisable).onChange(of: thisDisplayDisable){ newVal in
                        workingDisplay.disable = newVal
                        Static.User.set(thisDisplayDisable, forKey: "DisableDisplay_\(workingDisplay.screen.localizedName)")
                        
                        if !newVal {
                            workingDisplay.setRecorderProfile(lowProfile: true)
                        }
                        else {
                            workingDisplay.recorderPause()
                        }
                    }
                                        
                    Text("Enable sides:")
                        .padding(.top, 5)
                    
                    //Up (number 3)
                    HStack(alignment: .center){
                        //Text("") // what advanced tecniques...
                        Toggle("", isOn: $thisDisplayEnableTop).onChange(of: thisDisplayEnableTop){ newVal in
                            workingDisplay.activateSide[3] = newVal
                            Static.User.set(workingDisplay.activateSide[3], forKey: "DisplayEnableTop_\(workingDisplay.screen.localizedName)")
                        }
                        .toggleStyle(.switch)
                        .padding(.trailing, 5)
                    }.padding(.bottom, 4)
                    
                    HStack(alignment: .center){
                        Toggle("", isOn: $thisDisplayEnableLeft).onChange(of: thisDisplayEnableLeft){ newVal in
                            workingDisplay.activateSide[0] = newVal
                            Static.User.set(workingDisplay.activateSide[0], forKey: "DisplayEnableLeft_\(workingDisplay.screen.localizedName)")
                        }
                        
                        Text(" \(Image(systemName: "circle.grid.cross")) ")
                        
                        Toggle("", isOn: $thisDisplayEnableRight).onChange(of: thisDisplayEnableRight){ newVal in
                            workingDisplay.activateSide[1] = newVal
                            Static.User.set(workingDisplay.activateSide[1], forKey: "DisplayEnableRight_\(workingDisplay.screen.localizedName)")
                        }
                    }
                    
                    HStack(alignment: .center){
                        Text("") // what advanced tecniques...
                        Toggle(" ", isOn: $thisDisplayEnableBottom).onChange(of: thisDisplayEnableBottom){ newVal in
                            workingDisplay.activateSide[2] = newVal
                            Static.User.set(workingDisplay.activateSide[2], forKey: "DisplayEnableBottom_\(workingDisplay.screen.localizedName)")
                        }
                    }
                    
                }.frame(width: Static.MenuBarPopupWidth-10)
            }
            
            Spacer(minLength: 20)
            
            Slider(value: $currentSensivity,
               in: 1...20,
               onEditingChanged: { editing in
                    print("sensivity changed")
                    Static.Sensivity = self.currentSensivity
                
                    Static.User.set(Static.Sensivity, forKey: "Sensivity")
            }){
                Text("\(Image(systemName: "speedometer")) Sensivity:")
            }
            
            Spacer()
            
            VStack(alignment: .center){
                Stepper(value: $maxApps, in: 3...15, onEditingChanged: {editing in
                    Static.MaxApps = maxApps
                    
                    Static.User.set(Static.MaxApps, forKey: "MaxApps")
                }) {
                    Text("\(Image(systemName: "door.garage.double.bay.closed")) Max apps: \(maxApps)")
                }
                .padding(5)
            }
            
            VStack(alignment: .leading){
                /*Toggle("\(Image(systemName: "tortoise")) Dock mouse slowing", isOn: $dockSlowering).onChange(of: dockSlowering){ newVal in
                    Static.EnableDockMouseSlowering = newVal
                    
                    Static.User.set(Static.EnableDockMouseSlowering, forKey: "EnableDockMouseSlowering")
                }*/
                
                Toggle(" \(Image(systemName: "dock.rectangle"))  Disable on Dock side", isOn: $disableDockSide).onChange(of: disableDockSide){ newVal in
                    Static.DisableOnDockSide = newVal
                    
                    Static.User.set(Static.DisableOnDockSide, forKey: "DisableOnDockSide")
                }
                
                if false { // moved in Widgets Zone settings
                    Toggle(" \(Image(systemName: "drop.circle.fill"))  Enable top drag & drop detect", isOn: $enableDragDropDetection).onChange(of: enableDragDropDetection){ newVal in
                        Static.EnableDragDropDetection = newVal
                        
                        Static.User.set(Static.EnableDragDropDetection, forKey: "EnableDragDropDetection")
                    }
                }
                
                Spacer()
                Button(action: {
                    let howToBasics = SwifterPanel<HowToBasicsView>(view: HowToBasicsView());
                    howToBasics.show()
                }, label: {
                    Text("\(Image(systemName: "videoprojector")) Basic how to use").padding(10)
                })
                .background(Color(red: 0.4, green: 0.52, blue: 0.0)).cornerRadius(5).buttonStyle(.bordered)
                Spacer()
                
                /*Toggle("\(Image(systemName: "hare")) Require acceleration", isOn: $requireAcceleration).onChange(of: requireAcceleration){ newVal in
                    Static.EnableRequiredAcceleration = newVal
                    
                    Static.User.set(Static.EnableRequiredAcceleration, forKey: "EnableRequiredAcceleration")
                }*/                                
                
            }.padding(5)
                

            HStack{
                VStack {
                    
                    Toggle("\(Image(systemName: "appclip")) Show in Dock", isOn: $showInDock).onChange(of: showInDock){ newVal in
                        Static.ShowInDock = newVal
                    }
                    
                    ///# OPEN AT LOGIN
                    if #available(macOS 13, *) {
                        Toggle("\(Image(systemName: "autostartstop")) Open at login", isOn: $launchAtStartup).onChange(of: launchAtStartup){ newVal in
                            Static.OpenAtStartup = newVal
                        }
                    }
                    else {
                        Button(action: {
                            let startupView = SwifterPanel<HowStartupView>(view: HowStartupView())
                            startupView.show()
                        }, label: {
                            Text("\(Image(systemName: "autostartstop")) Open at login").padding(22)
                        }).background(Color(red: 0.15, green: 0.15, blue: 1)).cornerRadius(5).buttonStyle(.bordered)
                    }
                    
                    Button(action: {
                        let url = URL(string: "https://github.com/Geckos-Ink/MakeItHome/issues")!
                        if NSWorkspace.shared.open(url) {
                            print("default browser was successfully opened")
                        }
                    }, label: {
                        Text("\(Image(systemName: "questionmark.circle.fill")) Help").frame(width: 150).padding(2)//.padding(.horizontal ,50)
                    }).background(Color(red: 0.15, green: 0.75, blue: 0.3)).cornerRadius(5).buttonStyle(.bordered)
                    
                    Button(action: {
                        let appId = 6444596296
                        if let url = URL(string: "https://apps.apple.com/app/id\(appId)?action=write-review") {
                            NSWorkspace.shared.open(url)
                        }
                    }, label: {
                        Text("\(Image(systemName: "scribble.variable")) Review!").frame(width: 150).padding(2)//.padding(.horizontal ,40)
                    }).background(Color(red: 1, green: 0.4, blue: 0.2)).cornerRadius(5).buttonStyle(.bordered)
                
                    Button(action: {
                        
                        let stringToCopy = "https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296"
                        let customItem = CustomUrlPasteboardItem(stringValue: stringToCopy)
                        
                        let sharingPicker = NSSharingServicePicker(items: [customItem])
                                 
                        sharingPicker.show(relativeTo: NSZeroRect, of: currentMenuBarNSView!, preferredEdge: .minY)
                        
                    }, label: {
                        Text("\(Image(systemName: "square.and.arrow.up.circle.fill")) Share!").frame(width: 150).padding(2)//.padding(.horizontal ,40)
                    }).background(Color(red: 0.2, green: 0.2, blue: 1)).cornerRadius(5).buttonStyle(.bordered)
                }
                
                Button(action: {
                    if let url = URL(string: "https://github.com/Geckos-Ink/MakeItHome"){
                        if NSWorkspace.shared.open(url) {
                            print("default browser was successfully opened")
                            
                        }
                    }
                }){
                    VStack{
                        Image("GeckosInkLogo").resizable().frame(width: 80, height: 80)
                        Text("by Gecko's Ink")
                        Text("\(Image(systemName: "lizard.fill")) \(appVersion)")
                    }.onHover { inside in
                        if inside {
                            NSCursor.pointingHand.push()
                        } else {
                            NSCursor.pop()
                        }
                    }
                    
                }.frame(width:100).buttonStyle(.borderless)
                

            }
            
            VStack{
                Spacer(minLength: 20)
                
                Button(action: closeApp, label: {
                    Text("Quit").padding(.horizontal , 20)
                }).background(Color.red).cornerRadius(5).buttonStyle(.bordered).padding(.bottom)
            }
            
            Group {
                
                if Static.ActivationStatus <= 0 {
                    VStack(){
                        Text("Your 30 days of trial are expired!").foregroundColor(.black)
                        Button(action: {
                            if let url = URL(string: "itms-apps://itunes.apple.com/app/geckos-ink-makeithome/id6444596296"){
                                if NSWorkspace.shared.open(url) {
                                    print("default browser was successfully opened")
                                }
                            }
                        }){
                            Text("Open App Store").foregroundColor(.black)
                        }
                    }.frame(width: Static.MenuBarPopupWidth).padding().background(.yellow)
                }
                
                if Static.UpdateAvailable {
                    VStack(){
                        Text("A new update is available").foregroundColor(.black)
                        Button(action: {
                            if let url = URL(string: "https://geckos.ink/products/makeithome/"){
                                if NSWorkspace.shared.open(url) {
                                    print("default browser was successfully opened")
                                }
                            }
                        }){
                            Text("Download!").foregroundColor(.black)
                        }
                    }.frame(width: Static.MenuBarPopupWidth).padding().background(.yellow)
                }
                
                if isUnauthorized {
                    VStack() {
                        Spacer()
                        if #available(macOS 12.0, *) {
                            VStack {
                                Text("No screen recording permission.")
                                    .font(.caption)
                                    .padding(.top)
                                Text("Open System Settings and go to Privacy & Security >")
                                    .font(.footnote)
                                Text("Screen Recording to grant permission.")
                                    .font(.footnote)
                                    .padding(.bottom)
                            }
                            .frame(width: Static.MenuBarPopupWidth)
                            .background(.red)
                            
                            VStack {
                                Spacer()
                                Text("Screen recording is necessary for creating the")
                                    .font(.footnote)
                                Text("boundary break effect and saving apps' previews.")
                                    .font(.footnote)
                                Text("No screenshots will be saved anywhere.")
                                    .font(.footnote)
                                    .padding(.bottom)
                            }
                            .frame(width: Static.MenuBarPopupWidth)
                            .background(.green)
                            
                        } else {
                            VStack {
                                Text("No screen recording permission.")
                                    .font(.caption)
                                    .padding(.top)
                                Text("Open System Settings and go to Privacy & Security >")
                                    .font(.footnote)
                                Text("Screen Recording to grant permission.")
                                    .font(.footnote)
                                    .padding(.bottom)
                            }
                            .frame(width: Static.MenuBarPopupWidth)
                            
                            VStack {
                                Spacer()
                                Text("Screen recording is necessary for creating the")
                                    .font(.footnote)
                                Text("boundary break effect and saving apps' previews.")
                                    .font(.footnote)
                                Text("No screenshots will be saved anywhere.")
                                    .font(.footnote)
                                    .padding(.bottom)
                            }
                            .frame(width: Static.MenuBarPopupWidth)
                        }
                        
                    }
                    
                }
            }
        }
        .frame(width: Static.MenuBarPopupWidth, alignment: .center)
        .background(MenuBackground())
    }
    
    func closeApp(){
        NSApplication.shared.terminate(self)
    }
    
    let workingDisplay : Display
    
    init(){
        appVersion = "v" + (Bundle.main.infoDictionary!["CFBundleShortVersionString"] as! String) + " b" + (Bundle.main.infoDictionary!["CFBundleVersion"] as! String)
        
        currentSensivity = Static.Sensivity
        dockSlowering = Static.EnableDockMouseSlowering
        maxApps = Static.MaxApps
        requireAcceleration = Static.EnableRequiredAcceleration
        disableDockSide = Static.DisableOnDockSide
        launchAtStartup = Static.OpenAtStartup
        showInDock = Static.ShowInDock
        enableDragDropDetection = Static.EnableDragDropDetection
        
        isUnauthorized = Static.ScreenRecordingUnauthorized
        
        workingDisplay = Static.mouseInDisplay!
        thisDisplayDisable = Static.User.object(forKey: "DisableDisplay_\(workingDisplay.screen.localizedName)") as? Bool ?? false
        
        thisDisplayEnableLeft = Static.User.object(forKey: "DisplayEnableLeft_\(workingDisplay.screen.localizedName)") as? Bool ?? false
        thisDisplayEnableRight = Static.User.object(forKey: "DisplayEnableRight_\(workingDisplay.screen.localizedName)") as? Bool ?? false
        thisDisplayEnableBottom = Static.User.object(forKey: "DisplayEnableBottom_\(workingDisplay.screen.localizedName)") as? Bool ?? true
        
        thisDisplayEnableTop = Static.User.object(forKey: "DisplayEnableTop_\(workingDisplay.screen.localizedName)") as? Bool ?? true
        
        // Set default settings
        workingDisplay.disable = thisDisplayDisable
        
        workingDisplay.activateSide[0] = thisDisplayEnableLeft
        workingDisplay.activateSide[1] = thisDisplayEnableRight
        workingDisplay.activateSide[2] = thisDisplayEnableBottom
        
        workingDisplay.activateSide[3] = thisDisplayEnableTop        
    }
}

var currentMenuBarNSView : NSView?

struct MenuBackground: NSViewRepresentable {
    func makeNSView(context: Context) -> NSView {
        let view = NSView()
        currentMenuBarNSView = view
        return view
    }

    func updateNSView(_ nsView: NSView, context: Context) {}
}

struct BarView_Previews: PreviewProvider {
    static var previews: some View {
        MenuBarView()
    }
}

class CustomUrlPasteboardItem: NSObject, NSPasteboardWriting {
    let stringValue: String

    init(stringValue: String) {
        self.stringValue = stringValue
    }

    // MARK: - NSPasteboardWriting

    static var writableTypes: [NSPasteboard.PasteboardType] = [.string, .URL]

    func writableTypes(for pasteboard: NSPasteboard) -> [NSPasteboard.PasteboardType] {
        return Self.writableTypes
    }

    func pasteboardPropertyList(forType type: NSPasteboard.PasteboardType) -> Any? {
        if type == .string {
            return stringValue
        }
        
        if type == .URL {
            return stringValue
        }
        
        return nil
    }
}

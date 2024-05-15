import SwiftUI

extension CGRect {
	fileprivate func point(anchor: UnitPoint) -> CGPoint {
		var point = self.origin
		point.x += self.size.width * anchor.x
		#if os(macOS)
		point.y += self.size.height * (1 - anchor.y)
		#else
		point.y += self.size.height * anchor.y
		#endif
		return point
	}
}

// inspired by https://gist.github.com/wtsnz/09e5fbbeb9d803e02bd9d3d6c14adcb5

public struct BorderlessWindow<Content>: NSViewRepresentable where Content: View {
	@Binding private var isVisible: Bool
	private let anchor: UnitPoint
	private let windowAnchor: UnitPoint
	private let windowOffset: CGPoint
	private let content: () -> Content
	
	public init(isVisible: Binding<Bool>,
				anchor: UnitPoint = .center,
				windowAnchor: UnitPoint = .center,
				windowOffset: CGPoint = .zero,
				@ViewBuilder content: @escaping () -> Content) {
		self._isVisible = isVisible
		self.anchor = anchor
		self.windowAnchor = windowAnchor
		self.windowOffset = windowOffset
		self.content = content
	}
	
	public func makeNSView(context: Context) -> NSView {
		NSView(frame: .zero)
	}
	
	public func updateNSView(_ view: NSView,
							 context: Context) {
		context.coordinator.hostingViewController.rootView = AnyView(self.content())
		
		let window = context.coordinator.window
		
		// Ensure that the visiblity has changed
		let isVisible = self.isVisible
		if isVisible != window.isVisible {
			if isVisible {
				if let parentWindow = view.window {
					parentWindow.addChildWindow(window, ordered: .above)
				}
				window.makeKeyAndOrderFront(nil)
				
				window.alphaValue = 1.0
			} else {
				NSAnimationContext.runAnimationGroup { context in
					context.duration = 0.1
					context.timingFunction = CAMediaTimingFunction(name: CAMediaTimingFunctionName.easeIn)
					window.animator().alphaValue = 0.0
				} completionHandler: {
					if let parentWindow = view.window {
						parentWindow.removeChildWindow(window)
					}
					window.orderOut(nil)
				}
			}
		}
		
		// set position of the window
		var viewFrame = view.convert(view.bounds, to: nil)
		viewFrame = view.window?.convertToScreen(viewFrame) ?? viewFrame
		let viewPoint = viewFrame.point(anchor: self.anchor)
		
		var windowFrame = window.frame
		let windowPoint = windowFrame.point(anchor: self.windowAnchor)
		
		var shift: CGPoint = viewPoint
		let windowOffset = self.windowOffset
		/*shift.x += windowOffset.x
		shift.y -= windowOffset.y
		shift.x -= windowPoint.x
		shift.y -= windowPoint.y*/
        
        shift.x = 0
        shift.y = 0
        
		if !shift.equalTo(.zero) {
			windowFrame.origin.x += shift.x
			windowFrame.origin.y += shift.y
			window.setFrame(windowFrame, display: false)
		}
	}
	
	public func makeCoordinator() -> Coordinator {
		Coordinator(self)
	}
	
	public class Coordinator: NSObject {
		private var parent: BorderlessWindow
		
		fileprivate let window: NSWindow
		fileprivate let hostingViewController: NSHostingController<AnyView>
		
		fileprivate init(_ parent: BorderlessWindow) {
			self.parent = parent
			
			let window = NSWindow(contentRect: .zero,
								  styleMask: [.borderless],
								  backing: .buffered,
								  defer: true)
			window.isOpaque = false
            window.backgroundColor = .highlightColor
			window.hidesOnDeactivate = true
			window.isExcludedFromWindowsMenu = true
			window.isReleasedWhenClosed = false
            
            // study case: https://stackoverflow.com/questions/23821693/cocoa-nsview-blurred-background
            window.backgroundColor = NSColor(red: 0.2, green: 0.2, blue: 0.2, alpha: 0.5)
            //window.styleMask = .fullScreen
            
			self.window = window
			
			let hostingViewController = NSHostingController(rootView: AnyView(EmptyView()))
			window.contentViewController = hostingViewController
			self.hostingViewController = hostingViewController
		}
	}
}

extension View {
	public func borderlessWindow<Content: View>(isVisible: Binding<Bool>, anchor: UnitPoint = .center, windowAnchor: UnitPoint = .center, windowOffset: CGPoint = .zero, @ViewBuilder content: @escaping () -> Content) -> some View {
		self.background(BorderlessWindow(isVisible: isVisible, anchor: anchor, windowAnchor: windowAnchor, windowOffset: windowOffset, content: content))
	}
}

struct BorderlessTestView: View {
	@State var showWindow: Bool = false
	
	var body: some View {
		VStack {
			Button {
				self.showWindow.toggle()
			} label: {
				Text("Check")
			}
			.borderlessWindow(isVisible: self.$showWindow,
							  anchor: .bottomLeading,
							  windowAnchor: .topLeading,
							  windowOffset: CGPoint(x: -20, y: -19)) {
				VStack {
					Text("Checked ✓")
					Button {
						self.showWindow = false
					} label: {
						Text("Close")
					}
				}
				.frame(width: 100, height: 100)
				.background(
					ZStack {
					RoundedRectangle(cornerRadius: 5)
						.foregroundColor(Color(white: 0.98))
					RoundedRectangle(cornerRadius: 5)
								.stroke(lineWidth: 0.5)
								.foregroundColor(Color(white: 0, opacity: 0.25))
					}
				)
				.shadow(color: Color(white: 0, opacity: 0.10),
						radius: 5, x: 0, y: 2)
				.padding(20)
			}
			.frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
		}
	}
}

struct BorderlessWindow_Previews: PreviewProvider {
	static var previews: some View {
		BorderlessTestView()
	}
}

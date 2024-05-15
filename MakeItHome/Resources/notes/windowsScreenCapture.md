Capturing the screen on Windows using C# is typically done with the Windows Graphics Capture APIs or using GDI+/DirectX. However, starting with Windows 10, Microsoft recommends using the newer `Windows.Graphics.Capture` namespace for screen capture tasks.

Here is a basic example using the `GraphicsCapturePicker` which is part of the UWP APIs and can be used in a desktop application packaged with the Windows Application Packaging Project:

```csharp
using System;
using Windows.Graphics.Capture;
using Windows.Graphics.DirectX.Direct3D11;
using Windows.UI.Composition;

public class ScreenCapture
{
    private GraphicsCaptureItem captureItem;

    public event Action<IDirect3DSurface> FrameArrived;

    public async void StartCaptureAsync()
    {
        // You must be on a UI thread when you call this method
        var picker = new GraphicsCapturePicker();
        GraphicsCaptureItem item = await picker.PickSingleItemAsync();

        // The user cancelled the pick operation
        if (item == null)
        {
            return;
        }

        captureItem = item;
        StartCaptureInternal();
    }

    private void StartCaptureInternal()
    {
        var direct3DDevice = Direct3D11Helper.CreateDevice();

        var captureSession = new Direct3D11CaptureFramePool(
            direct3DDevice,
            DirectXPixelFormat.B8G8R8A8UIntNormalized,
            1,
            captureItem.Size);

        var session = captureSession.CreateCaptureSession(captureItem);
        captureSession.FrameArrived += (s, a) =>
        {
            using (var frame = s.TryGetNextFrame())
            {
                FrameArrived?.Invoke(frame.Surface);
            }
        };

        session.StartCapture();
    }
}

// Usage
var screenCapture = new ScreenCapture();
screenCapture.FrameArrived += (surface) =>
{
    // Process the frame captured in 'surface'
};
screenCapture.StartCaptureAsync();
```

This code sets up a screen capture session using UWP APIs. The `StartCaptureAsync` method shows a UI to the user asking them to select a window or monitor to capture. Once the user selects something, the `FrameArrived` event is fired each time a new frame is available.

Please note the following:

-

This code is an example and will not work as-is because it needs to be part of a UWP application or a packaged desktop application with access to the UWP APIs.
- The `GraphicsCapturePicker` will present a UI to the user to select the window or screen to capture. The actual screen capture will not start until the user has made a selection.
- The `FrameArrived` event will be raised for each frame, and you can process the `IDirect3DSurface` accordingly.
- This example assumes that you have a UWP project or a Win32 project with a packaged manifest that gives access to the UWP APIs. This is not standard for all C# projects.
- The `

Direct3D11Helper.CreateDevice()` and related Direct3D11 functions are part of the `Windows.Graphics.DirectX.Direct3D11` namespace, which may require additional setup and dependencies to work properly.
- You may need to configure your project to target Windows 10 and reference the necessary Windows SDK.

For a traditional WinForms or WPF application, you might need to use p/invoke with GDI+ to capture the screen if you're targeting an older version of Windows or if you're not using the UWP APIs.

To capture the screen with a callback for every frame using GDI+, you would set up a timer and capture the screen in each tick, like this:

```csharp
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;
using System.Windows.Forms;

class ScreenCapture
{
    [DllImport("user32.dll")]
    private static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect);

    public Action<Image> OnFrame;

    public void StartCapture()
    {
        Timer timer = new Timer();
        timer.Interval = 1000 / 30; // Capture at 30 FPS
        timer.Tick += (sender, args) =>
        {
            CaptureFrame();
        };
        timer.Start();
    }

    private void CaptureFrame()
    {
        Rectangle bounds;
        var foregroundWindowHandle = GetForegroundWindow();
        GetClientRect(foregroundWindowHandle, out bounds);

        if (bounds.Width == 0 || bounds.Height == 0)
            return;

        Bitmap bitmap = new Bitmap(bounds.Width, bounds.Height);

        using (Graphics g = Graphics.FromImage(bitmap))
        {
            g.CopyFromScreen(new Point(bounds.Left, bounds.Top), Point.Empty, bounds.Size);
        }

        OnFrame?.Invoke(bitmap);
    }

    [DllImport("user32.dll")]
    private static extern IntPtr GetForegroundWindow();
}

// Usage
var capture = new ScreenCapture();
capture.OnFrame += (frame) =>
{
    // Process the frame
    // Remember to dispose of the image after processing
};
capture.StartCapture();
```

Remember, screen capture can be resource-intensive, and it's important to manage the captured images properly to avoid memory leaks. Always dispose of the `Bitmap` objects after you're done processing them.

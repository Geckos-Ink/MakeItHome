//
//  CoreImage.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 28/10/22.
//

import Foundation
import CoreImage
import AppKit

let convertToCG_Context = CIContext(options: nil)
func convertToCGImage(image: CIImage) -> CGImage? {
    //let context = CIContext(options: nil)
    if let cgImage = convertToCG_Context.createCGImage(image, from: image.extent) {
        //convertToCG_Context.reclaimResources()
        return cgImage
    }
    
    return nil
}

///
/// Chroma key
///
func chromaKeyFilter(fromHue: CGFloat, toHue: CGFloat) -> CIFilter?
{
    // 1
    let size = 64
    var cubeRGB = [Float]()
        
    // 2
    for z in 0 ..< size {
        let blue = CGFloat(z) / CGFloat(size-1)
        for y in 0 ..< size {
            let green = CGFloat(y) / CGFloat(size-1)
            for x in 0 ..< size {
                let red = CGFloat(x) / CGFloat(size-1)
                    
                // 3
                let hue = getHue(red: red, green: green, blue: blue)
                let alpha: CGFloat = (hue >= fromHue && hue <= toHue) ? 0: 1
                    
                // 4
                cubeRGB.append(Float(red * alpha))
                cubeRGB.append(Float(green * alpha))
                cubeRGB.append(Float(blue * alpha))
                cubeRGB.append(Float(alpha))
            }
        }
    }

    let data = Data(buffer: UnsafeBufferPointer(start: &cubeRGB, count: cubeRGB.count))

    // 5
    let colorCubeFilter = CIFilter(name: "CIColorCube", parameters: ["inputCubeDimension": size, "inputCubeData": data])
    return colorCubeFilter
}

func standardChromaKeyFilter(fromHue: CGFloat, toHue: CGFloat) -> CIFilter?
{
    // 1
    let size = 64
    var cubeRGB = [Float]()
        
    // 2
    for z in 0 ..< size {
        let blue = CGFloat(z) / CGFloat(size-1)
        for y in 0 ..< size {
            let green = CGFloat(y) / CGFloat(size-1)
            for x in 0 ..< size {
                let red = CGFloat(x) / CGFloat(size-1)
                    
                // 3
                let hue = getHue(red: red, green: green, blue: blue)
                let alpha: CGFloat = (green > 0.9) ? 0: 1
                    
                // 4
                cubeRGB.append(Float(red * alpha))
                cubeRGB.append(Float(green * alpha))
                cubeRGB.append(Float(blue * alpha))
                cubeRGB.append(Float(alpha))
            }
        }
    }

    let data = Data(buffer: UnsafeBufferPointer(start: &cubeRGB, count: cubeRGB.count))

    // 5
    let colorCubeFilter = CIFilter(name: "CIColorCube", parameters: ["inputCubeDimension": size, "inputCubeData": data])
    return colorCubeFilter
}

func getHue(red: CGFloat, green: CGFloat, blue: CGFloat) -> CGFloat
{
    let color = NSColor(red: red, green: green, blue: blue, alpha: 1)
    var hue: CGFloat = 0
    color.getHue(&hue, saturation: nil, brightness: nil, alpha: nil)
    return hue
}

func getHue(color: CIColor) -> CGFloat
{
    let color = NSColor(red: color.red, green: color.green, blue: color.blue, alpha: 1)
    var hue: CGFloat = 0
    color.getHue(&hue, saturation: nil, brightness: nil, alpha: nil)
    return hue
}

func chromaKey(foregroundCIImage : CIImage, backgroundCIImage : CIImage) -> CIImage{
    let hue = getHue(color: CIColor.green)
    
    let chromaCIFilter = standardChromaKeyFilter(fromHue: hue-0.1, toHue: hue+0.1)
    chromaCIFilter?.setValue(foregroundCIImage, forKey: kCIInputImageKey)
    let sourceCIImageWithoutBackground = chromaCIFilter?.outputImage
    
    let compositor = CIFilter(name:"CISourceOverCompositing")
    compositor?.setValue(sourceCIImageWithoutBackground, forKey: kCIInputImageKey)
    compositor?.setValue(backgroundCIImage, forKey: kCIInputBackgroundImageKey)    
    return compositor!.outputImage!
}


func resizeCI(image: CIImage, scale:Double) -> CIImage {
    let filter = CIFilter(name: "CILanczosScaleTransform")!
    filter.setValue(image, forKey: kCIInputImageKey)
    filter.setValue(scale, forKey: kCIInputScaleKey)
    filter.setValue(image.extent.width / image.extent.height, forKey:kCIInputAspectRatioKey)
    return filter.value(forKey: kCIOutputImageKey) as! CIImage
}

func blurredCI(image: CIImage, radius:Double) -> CIImage {
    let filter = CIFilter(name: "CIGaussianBlur")!
    filter.setValue(image, forKey: kCIInputImageKey)
    filter.setValue(radius, forKey: kCIInputRadiusKey)
    return filter.value(forKey: kCIOutputImageKey) as! CIImage
}

func goodBytesPerRow(_ width: Int) -> Int {
    return (((width * 4) + 15) / 16) * 16
}

func drawMyImage(width: CGFloat, height: CGFloat) -> CGImage? {
    let bounds = CGRect(x: 0, y:0, width: width, height: height)
    let intWidth = Int(ceil(bounds.width))
    let intHeight = Int(ceil(bounds.height))
    let bitmapContext = CGContext(data: nil,
                                  width: intWidth, height: intHeight,
                                  bitsPerComponent: 8,
                                  bytesPerRow: goodBytesPerRow(intWidth),
                                  space: CGColorSpace(name: CGColorSpace.sRGB)!,
                                  bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue)

    if let cgContext = bitmapContext {
        cgContext.saveGState()
        cgContext.setFillColor(red: 0, green: 0, blue: 0, alpha: 0.5)
        cgContext.fill(bounds)

        /* ... do other drawing here ... */

        cgContext.restoreGState()

        let img = cgContext.makeImage()        
        return img
    }

    return nil
}


extension NSImage {
    /// Generates a CIImage for this NSImage.
    /// - Returns: A CIImage optional.
    func ciImage() -> CIImage? {
        guard let data = self.tiffRepresentation,
              let bitmap = NSBitmapImageRep(data: data) else {
            return nil
        }
        let ci = CIImage(bitmapImageRep: bitmap)
        return ci
    }
    
    /// Generates an NSImage from a CIImage.
    /// - Parameter ciImage: The CIImage
    /// - Returns: An NSImage optional.
    static func fromCIImage(_ ciImage: CIImage) -> NSImage {
        let rep = NSCIImageRep(ciImage: ciImage)
        let nsImage = NSImage(size: rep.size)
        nsImage.addRepresentation(rep)
        return nsImage
    }
}


func applyColorFilter(to image: NSImage, with color: NSColor) -> NSImage? {
    guard let tiffData = image.tiffRepresentation, let ciImage = CIImage(data: tiffData) else {
        return nil
    }
    
    // Create a CIImage with the given color
    let colorFilter = CIFilter(name: "CIConstantColorGenerator")!
    colorFilter.setValue(CIColor(color: color), forKey: kCIInputColorKey)
    guard let colorImage = colorFilter.outputImage else {
        return nil
    }
    
    // Crop the color image to the size of the original image
    let colorImageCropped = colorImage.cropped(to: ciImage.extent)
    
    // Blend the color image over the original image
    let blendFilter = CIFilter(name: "CISourceAtopCompositing")!
    blendFilter.setValue(colorImageCropped, forKey: kCIInputImageKey)
    blendFilter.setValue(ciImage, forKey: kCIInputBackgroundImageKey)
    
    guard let outputImage = blendFilter.outputImage else {
        return nil
    }
    
    // Convert the CIImage back to NSImage
    let rep = NSCIImageRep(ciImage: outputImage)
    let nsImage = NSImage(size: rep.size)
    nsImage.addRepresentation(rep)
    
    return nsImage
}

func averageColor(of image: NSImage) -> NSColor? {
    // Ensure the image has valid TIFF representation data
    guard let tiffData = image.tiffRepresentation else {
        return nil
    }
    
    // Create a CIImage from the TIFF data
    guard let ciImage = CIImage(data: tiffData) else {
        return nil
    }
    
    // Create an extent vector (rectangle) from the image's extent
    let extentVector = CIVector(x: ciImage.extent.origin.x, y: ciImage.extent.origin.y, z: ciImage.extent.size.width, w: ciImage.extent.size.height)
    
    // Set up the CIAreaAverage filter
    guard let filter = CIFilter(name: "CIAreaAverage", parameters: [kCIInputImageKey: ciImage, kCIInputExtentKey: extentVector]) else {
        return nil
    }
    
    // Get the output image from the filter
    guard let outputImage = filter.outputImage else {
        return nil
    }
    
    var bitmap = [UInt8](repeating: 0, count: 4)
    
    // Create a CIContext
    let context = CIContext(options: nil)
    
    // Render the output image into the bitmap context
    context.render(outputImage, toBitmap: &bitmap, rowBytes: 4, bounds: CGRect(x: 0, y: 0, width: 1, height: 1), format: .RGBA8, colorSpace: nil)
    
    // Get the pixel data from the bitmap context
    return NSColor(red: CGFloat(bitmap[0]) / 255, green: CGFloat(bitmap[1]) / 255, blue: CGFloat(bitmap[2]) / 255, alpha: CGFloat(bitmap[3]) / 255)
}

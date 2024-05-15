#  Old code

## Metal 
```swift
    @MainActor func render(frame: CapturedFrame) {
        //render into
    }

    //inspiration: https://gist.github.com/warrenm/7e87f44087132312c70ff4395a8bae9a
    // https://developer.apple.com/forums/thread/115848
    
    if(frame == nil){
        print("render frame died")
        return
    }
    
    let curDisplay = screenRecorder.contentView?.Displays.curDisplay
    let disFrame = curDisplay!.frame
            
    let commandQueue = device!.makeCommandQueue()
    let commandBuffer = commandQueue!.makeCommandBuffer()
    
    let textDescriptor = MTLTextureDescriptor.texture2DDescriptor(pixelFormat: .bgra8Unorm_srgb, width: Int(disFrame.width), height: Int(disFrame.height), mipmapped: false)
    
    textDescriptor.textureType = .type2DArray
    textDescriptor.usage = .renderTarget
    
    
    let texture = device!.makeTexture(descriptor: textDescriptor)
    let region = MTLRegion(origin: MTLOrigin(x: Int(frame.contentRect.origin.x), y: Int(frame.contentRect.origin.y), z:0), size: MTLSize(width: Int(frame.contentRect.size.width), height: Int(frame.contentRect.size.height), depth: 0))
    
    let textBuff = CVMetalTextureGetTexture(frame.pixelBuffer!)
    let outText = textBuff?.makeTextureView(pixelFormat: .bgra8Unorm_srgb)
                        
    let rpd = MTLRenderPassDescriptor()
    let bleen = MTLClearColor(red: 0, green: 0.5, blue: 0.5, alpha: 1)
    //rpd.colorAttachments[0].texture = texture
    rpd.colorAttachments[0].clearColor = bleen
    rpd.colorAttachments[0].loadAction = .clear
    
    rpd.depthAttachment.texture = textBuff
    rpd.depthAttachment.clearDepth = 1
    rpd.depthAttachment.loadAction = .clear
    rpd.depthAttachment.storeAction = .store
    
    rpd.renderTargetWidth = Int(disFrame.width)
    rpd.renderTargetHeight = Int(disFrame.height)
    rpd.defaultRasterSampleCount = 1
    
    // Pipeline vertex: https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Render-Ctx/Render-Ctx.html
    
    var mesh: MTKMesh!
    var vertexBuffer: MTLBuffer!
    var pipelineState: MTLRenderPipelineState!
    
    let mdlMesh = Primitive.makePlane(device: device!, size: 1)
    do {
      mesh = try MTKMesh(mesh: mdlMesh, device: device!)
    } catch let error {
      print(error.localizedDescription)
    }
    
    vertexBuffer = mesh.vertexBuffers[0].buffer
    
    let library = device!.makeDefaultLibrary()
    let vertexFunction = library?.makeFunction(name: "vertex_main")
    let fragmentFunction =
        library?.makeFunction(name: "fragment_main")
    
    let pipelineDescriptor = MTLRenderPipelineDescriptor()
    pipelineDescriptor.vertexFunction = vertexFunction
    pipelineDescriptor.fragmentFunction = fragmentFunction
    pipelineDescriptor.vertexDescriptor =
          MTKMetalVertexDescriptorFromModelIO(mdlMesh.vertexDescriptor)
    pipelineDescriptor.colorAttachments[0].pixelFormat = captureVideoPreview.colorPixelFormat
    pipelineDescriptor.rasterSampleCount = 1
    
    do {
      pipelineState =
        try device!.makeRenderPipelineState(descriptor: pipelineDescriptor)
    } catch let error {
      fatalError(error.localizedDescription)
    }
    
    
    let descriptor = captureVideoPreview.currentRenderPassDescriptor
    if(descriptor == nil){
        commandBuffer!.commit()
        return
    }
    
    descriptor.colorAttachments[0].clearColor = MTLClearColorMake(1.0, 1.0, 0.0, 0.0)
    descriptor.colorAttachments[0].loadAction = .clear
    descriptor.colorAttachments[0].storeAction = .store
    descriptor.colorAttachments[0].texture = outText
    
    let encoder = commandBuffer!.makeRenderCommandEncoder(descriptor: descriptor)
    
    //
    // Vertex
    //
    
    encoder?.setVertexBuffer(vertexBuffer, offset: 0, index: 0)
    
    //MARK: continuer here: https://www.kodeco.com/books/metal-by-tutorials/v2.0/chapters/3-the-rendering-pipeline
    //let pipelineState = try device!.makeRenderPipelineState(descriptor: pipelineDescriptor)
    encoder?.setRenderPipelineState(pipelineState)
    
    for submesh in mesh.submeshes {
      encoder?.drawIndexedPrimitives(type: .triangle,
                  indexCount: submesh.indexCount,
                  indexType: submesh.indexType,
                  indexBuffer: submesh.indexBuffer.buffer,
                  indexBufferOffset: submesh.indexBuffer.offset)
    }
    
    //encoder.draw
    
    encoder!.endEncoding()
    commandBuffer?.present(captureVideoPreview.currentDrawable!)
    commandBuffer!.commit()
    
    print("command buffer draw")
    
    class Primitive {
      static func makeCube(device: MTLDevice, size: Float) -> MDLMesh {
        let allocator = MTKMeshBufferAllocator(device: device)
        let mesh = MDLMesh(boxWithExtent: [size, size, size],
                           segments: [1, 1, 1],
                           inwardNormals: false,
                           geometryType: .triangles,
                           allocator: allocator)
        return mesh
      }
        
        static func makePlane(device: MTLDevice, size: Float) -> MDLMesh {
          let allocator = MTKMeshBufferAllocator(device: device)
          let mesh = MDLMesh(planeWithExtent: [size, size, size],
                             segments: [1, 1],
                             geometryType: .triangles,
                             allocator: allocator)
          return mesh
        }
    }

```

## Old mouse deceleration system
```swift
    var slowDown = activateOnPixelsLimit - moveOnPixels
     let aboveDiff = self.prevMouseAboveBy - mouseAboveLimitBy
     self.prevMouseAboveBy = mouseAboveLimitBy
     
     //print("mouseAboveLimitBy", mouseAboveLimitBy)
     //print("aboveDiff", aboveDiff)
     if(aboveDiff > 0){
     slowDown = mouseAboveLimitBy - moveOnPixels
     //slowDown = abs(slowDown)
     
     // rapportate slow down
     slowDown /= activateOnPixelsLimit - moveOnPixels
     //slowDown = 1-slowDown
     //slowDown *= slowDownOf
     //slowDown += 0.1
     
     //TODO: calculate acceleration for changing slowDown weight
     }
     else {
     if(aboveDiff <= -1){
     resetMouse = true
     }
     
     slowDown = -1
     }
     
     //print("slowDonw", slowDown)
     if(slowDown != -1){
     var speed = accumulateAvg.x
     var speedRatio = accumulatedDelta.x / accumulatedDelta.y
     
     if(side >= 2){
     speed = accumulateAvg.y
     speedRatio = accumulatedDelta.y / accumulatedDelta.x
     }
     
     //speed /= maxAccumulate
     let dSpeed = speed - avgSideSpeed
     avgSideSpeed = (speed + (avgSideSpeed*accumulateWeight))/(accumulateWeight+1)
     
     //slowDown = pow(slowDown, speed/maxAccumulate)
     slowDown = abs(slowDown)
     slowDown = pow(slowDown, slowDownOf)
     
     //print(dSpeed)
     //print("ratio", side, slowDown, speedRatio)
     //print(side, dSpeed,"<0 ", speed,"<",slowDownMinSpeed," ",abs(speedRatio),">",slowDownMinSpeedRatio)
     if(abs(speedRatio) > slowDownMinSpeedRatio){
     //print("slowDown:", slowDown, speed)
     //print("accumulatedDelta", accumulatedDelta.x, accumulatedDelta.y)
     
     print("slow down by", slowDown)
     
     if(side < 2){ // horizontal
     accumulatedDelta.x -= slowDown * accumulatedDelta.x
     //accumulatedDelta.y *= acceleration
     //print("accX", accumulatedDelta.x, slowDown)
     }
     else {
     // vertically doesn't works
     slowDown = 1-slowDown
     accumulatedDelta.y -= slowDown*accumulatedDelta.y
     //accumulatedDelta.x *= acceleration
     }
     
     //moveTo.y = ((prevMouse.y*slowDown) + mouse.y)/(1+slowDown)
     alterMouse = 2
     }
     }
```                    

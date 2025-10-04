# Errors

### C01: Thread 4121: EXC_BAD_ACCESS (code=1, address=0xf5114374da0) 

    0x189a7c020 <+8>:   ldr    x16, [x0]
    0x189a7c024 <+12>:  and    x2, x16, #0x7ffffffffff8
->  0x189a7c028 <+16>:  ldr    x17, [x2, #0x20]

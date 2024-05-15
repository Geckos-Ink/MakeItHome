import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iframe-communicator',
  template: ``,
  standalone   : true,
})
export class IframeCommunicatorComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  private listener: (event: MessageEvent) => void;

  ngOnInit(): void {
    console.log("instanced iframe communicator")

    this.listener = (event: MessageEvent) => {
      // Security check (if you know the origin of the parent)
      if (event.origin !== 'http://127.0.0.1:19494') {
        return;
      }
      console.log('Message received from parent:', event.data);
      
      // Handle the message
      try {
        let json = JSON.parse(event.data)
        switch(json.op){
          case 'goTo':
            this.router.navigate(['/apps/'+json.to]);
            break;
        }
      }
      catch {}
    };

    window.addEventListener('message', this.listener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.listener);
  }

  sendMessageToParent(): void {
    const message = 'Hello from iframe!';
    window.parent.postMessage(message, 'http://127.0.0.1:19494'); // Replace with the actual parent origin
  }
}

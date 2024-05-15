import { Component, ViewEncapsulation } from '@angular/core';

import {IframeCommunicatorComponent} from 'app/app-iframe-communicator/app-iframe-communicator.component'

@Component({
    selector     : 'apps',
    standalone   : true,
    templateUrl  : './apps.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [IframeCommunicatorComponent]
})
export class AppsComponent
{
    /**
     * Constructor
     */
    constructor(iframeCommunicator: IframeCommunicatorComponent)
    {
        console.log("apps constructor", iframeCommunicator)
    }

    ngOnInit(): void {
        
    }
}

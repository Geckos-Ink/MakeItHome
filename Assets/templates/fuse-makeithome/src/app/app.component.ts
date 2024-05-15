import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FuseConfig, FuseConfigService, Scheme, Theme, Themes } from '@fuse/services/config';

import {IframeCommunicatorComponent} from 'app/app-iframe-communicator/app-iframe-communicator.component'

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet, IframeCommunicatorComponent],
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor(private fuceConfigService : FuseConfigService)
    {
        
    }

    ngOnInit(){
        // Subscribe to config changes
        this.fuceConfigService.config$
            .subscribe((config: FuseConfig) =>
            {
                config.layout = 'thin'
            });
    }
}

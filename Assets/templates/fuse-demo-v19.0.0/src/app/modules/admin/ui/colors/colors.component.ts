import { Component, ViewEncapsulation } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatRippleModule],
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

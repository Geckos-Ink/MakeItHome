import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'simple-fullwidth-1-page-scroll',
    templateUrl  : './fullwidth-1.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [CdkScrollable, MatIconModule, RouterLink, MatButtonModule],
})
export class SimpleFullwidth1PageScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

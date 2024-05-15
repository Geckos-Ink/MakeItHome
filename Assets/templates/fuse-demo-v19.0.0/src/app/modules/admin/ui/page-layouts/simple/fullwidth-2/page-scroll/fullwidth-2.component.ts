import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'simple-fullwidth-2-page-scroll',
    templateUrl  : './fullwidth-2.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [CdkScrollable, MatIconModule, RouterLink, MatButtonModule, MatTabsModule],
})
export class SimpleFullwidth2PageScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

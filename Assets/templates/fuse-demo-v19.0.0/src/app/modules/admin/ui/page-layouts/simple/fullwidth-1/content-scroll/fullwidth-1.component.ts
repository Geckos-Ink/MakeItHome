import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'simple-fullwidth-1-content-scroll',
    templateUrl  : './fullwidth-1.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule, RouterLink, MatButtonModule, CdkScrollable],
})
export class SimpleFullwidth1ContentScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

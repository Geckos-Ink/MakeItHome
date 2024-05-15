import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'simple-fullwidth-2-normal-scroll',
    templateUrl  : './fullwidth-2.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule, RouterLink, MatButtonModule, MatTabsModule],
})
export class SimpleFullwidth2NormalScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

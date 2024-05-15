import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'carded-fullwidth-normal-scroll',
    templateUrl  : './fullwidth.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule, RouterLink, MatButtonModule],
})
export class CardedFullwidthNormalScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

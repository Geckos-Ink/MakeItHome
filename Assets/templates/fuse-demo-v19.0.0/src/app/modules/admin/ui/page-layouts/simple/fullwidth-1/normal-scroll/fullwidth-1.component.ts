import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'simple-fullwidth-1-normal-scroll',
    templateUrl  : './fullwidth-1.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule, RouterLink, MatButtonModule],
})
export class SimpleFullwidth1NormalScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

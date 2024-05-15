import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'empty-normal-scroll',
    templateUrl  : './empty.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
})
export class EmptyNormalScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

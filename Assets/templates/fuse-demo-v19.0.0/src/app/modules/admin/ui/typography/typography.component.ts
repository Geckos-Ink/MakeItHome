import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FuseHighlightComponent } from '@fuse/components/highlight';

@Component({
    selector     : 'typography',
    templateUrl  : './typography.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [FuseHighlightComponent, RouterLink],
})
export class TypographyComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

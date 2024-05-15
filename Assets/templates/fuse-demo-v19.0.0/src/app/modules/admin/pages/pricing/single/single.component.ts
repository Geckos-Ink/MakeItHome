import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
    selector       : 'pricing-single',
    templateUrl    : './single.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [FuseCardComponent, MatIconModule, MatButtonModule],
})
export class PricingSingleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

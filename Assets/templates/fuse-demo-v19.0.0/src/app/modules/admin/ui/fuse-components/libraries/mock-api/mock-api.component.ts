import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'mock-api',
    templateUrl: './mock-api.component.html',
    standalone : true,
    imports    : [MatIconModule, MatButtonModule, FuseAlertComponent, FuseHighlightComponent],
})
export class MockApiComponent
{
    /**
     * Constructor
     */
    constructor(private _fuseComponentsComponent: FuseComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}

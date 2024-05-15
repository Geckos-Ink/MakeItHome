import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FuseDrawerComponent, FuseDrawerMode } from '@fuse/components/drawer';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html',
    standalone : true,
    imports    : [MatIconModule, MatButtonModule, FuseAlertComponent, FuseHighlightComponent, MatTabsModule, FuseDrawerComponent],
})
export class DrawerComponent
{
    drawerMode: FuseDrawerMode;
    drawerOpened: boolean;

    /**
     * Constructor
     */
    constructor(
        private _fuseComponentsComponent: FuseComponentsComponent,
    )
    {
        // Set the defaults
        this.drawerMode = 'side';
        this.drawerOpened = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     */
    toggleDrawerMode(): void
    {
        this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
    }

    /**
     * Toggle the drawer open
     */
    toggleDrawerOpen(): void
    {
        this.drawerOpened = !this.drawerOpened;
    }

    /**
     * Drawer opened changed
     *
     * @param opened
     */
    drawerOpenedChanged(opened: boolean): void
    {
        this.drawerOpened = opened;
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}

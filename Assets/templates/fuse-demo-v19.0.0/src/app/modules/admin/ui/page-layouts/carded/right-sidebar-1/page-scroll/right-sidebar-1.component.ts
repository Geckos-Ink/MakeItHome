import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { DemoSidebarComponent } from 'app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component';

@Component({
    selector     : 'carded-right-sidebar-1-page-scroll',
    templateUrl  : './right-sidebar-1.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [CdkScrollable, MatSidenavModule, DemoSidebarComponent, MatIconModule, RouterLink, MatButtonModule],
})
export class CardedRightSidebar1PageScrollComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

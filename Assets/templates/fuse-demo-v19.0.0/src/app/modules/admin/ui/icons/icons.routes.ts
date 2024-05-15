import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { IconsComponent } from 'app/modules/admin/ui/icons/icons.component';
import { IconsService } from 'app/modules/admin/ui/icons/icons.service';

export default [
    {
        // Redirect /icons to /icons/material-twotone
        path      : '',
        pathMatch : 'full',
        redirectTo: 'material-twotone',
    },
    {
        path     : '**',
        component: IconsComponent,
        resolve  : {
            icons: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(IconsService).getIcons(state.url),
        },
    },
] as Routes;

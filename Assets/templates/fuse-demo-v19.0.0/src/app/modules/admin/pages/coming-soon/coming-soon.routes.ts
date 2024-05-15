import { Routes } from '@angular/router';
import { ComingSoonClassicComponent } from 'app/modules/admin/pages/coming-soon/classic/coming-soon.component';
import { ComingSoonFullscreenReversedComponent } from 'app/modules/admin/pages/coming-soon/fullscreen-reversed/coming-soon.component';
import { ComingSoonFullscreenComponent } from 'app/modules/admin/pages/coming-soon/fullscreen/coming-soon.component';
import { ComingSoonModernReversedComponent } from 'app/modules/admin/pages/coming-soon/modern-reversed/coming-soon.component';
import { ComingSoonModernComponent } from 'app/modules/admin/pages/coming-soon/modern/coming-soon.component';
import { ComingSoonSplitScreenReversedComponent } from 'app/modules/admin/pages/coming-soon/split-screen-reversed/coming-soon.component';
import { ComingSoonSplitScreenComponent } from 'app/modules/admin/pages/coming-soon/split-screen/coming-soon.component';

export default [
    {
        path     : 'classic',
        component: ComingSoonClassicComponent,
    },
    {
        path     : 'modern',
        component: ComingSoonModernComponent,
    },
    {
        path     : 'modern-reversed',
        component: ComingSoonModernReversedComponent,
    },
    {
        path     : 'split-screen',
        component: ComingSoonSplitScreenComponent,
    },
    {
        path     : 'split-screen-reversed',
        component: ComingSoonSplitScreenReversedComponent,
    },
    {
        path     : 'fullscreen',
        component: ComingSoonFullscreenComponent,
    },
    {
        path     : 'fullscreen-reversed',
        component: ComingSoonFullscreenReversedComponent,
    },
] as Routes;

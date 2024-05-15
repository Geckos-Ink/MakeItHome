import { Routes } from '@angular/router';
import { AppsComponent } from 'app/modules/admin/apps/apps.component';

export default [
    {path: 'academy', loadChildren: () => import('app/modules/admin/apps/academy/academy.routes')},
    {path: 'chat', loadChildren: () => import('app/modules/admin/apps/chat/chat.routes')},
    {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.routes')},
    {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.routes')},
    {path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.routes')},
    {path: 'help-center', loadChildren: () => import('app/modules/admin/apps/help-center/help-center.routes')},
    {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.routes')},
    {path: 'notes', loadChildren: () => import('app/modules/admin/apps/notes/notes.routes')},
    {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.routes')},
    {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.routes')},
] as Routes;

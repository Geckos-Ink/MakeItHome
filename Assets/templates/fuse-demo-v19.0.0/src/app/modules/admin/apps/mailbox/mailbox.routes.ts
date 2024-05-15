import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { MailboxDetailsComponent } from 'app/modules/admin/apps/mailbox/details/details.component';
import { MailboxEmptyDetailsComponent } from 'app/modules/admin/apps/mailbox/empty-details/empty-details.component';
import { MailboxListComponent } from 'app/modules/admin/apps/mailbox/list/list.component';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailboxSettingsComponent } from 'app/modules/admin/apps/mailbox/settings/settings.component';
import { isEqual } from 'lodash-es';
import { catchError, finalize, forkJoin, throwError } from 'rxjs';

/**
 * Mailbox custom route matcher
 *
 * @param url
 */
const mailboxRouteMatcher: (url: UrlSegment[]) => UrlMatchResult = (url: UrlSegment[]) =>
{
    // Prepare consumed url and positional parameters
    let consumed = url;
    const posParams = {};

    // Settings
    if ( url[0].path === 'settings' )
    {
        // Do not match
        return null;
    }
    // Filter or label
    else if ( url[0].path === 'filter' || url[0].path === 'label' )
    {
        posParams[url[0].path] = url[1];
        posParams['page'] = url[2];

        // Remove the id if exists
        if ( url[3] )
        {
            consumed = url.slice(0, -1);
        }
    }
    // Folder
    else
    {
        posParams['folder'] = url[0];
        posParams['page'] = url[1];

        // Remove the id if exists
        if ( url[2] )
        {
            consumed = url.slice(0, -1);
        }
    }

    return {
        consumed,
        posParams,
    };
};

/**
 * Mailbox custom guards and resolvers runner
 *
 * @param from
 * @param to
 */
const mailboxRunGuardsAndResolvers: (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean = (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) =>
{
    // If we are navigating from mail to mails, meaning there is an id in
    // from's deepest first child and there isn't one in the to's, we will
    // trigger the resolver

    // Get the current activated route of the 'from'
    let fromCurrentRoute = from;
    while ( fromCurrentRoute.firstChild )
    {
        fromCurrentRoute = fromCurrentRoute.firstChild;
    }

    // Get the current activated route of the 'to'
    let toCurrentRoute = to;
    while ( toCurrentRoute.firstChild )
    {
        toCurrentRoute = toCurrentRoute.firstChild;
    }

    // Trigger the resolver if the condition met
    if ( fromCurrentRoute.paramMap.get('id') && !toCurrentRoute.paramMap.get('id') )
    {
        return true;
    }

    // If the from and to params are equal, don't trigger the resolver
    const fromParams = {};
    const toParams = {};

    from.paramMap.keys.forEach((key) =>
    {
        fromParams[key] = from.paramMap.get(key);
    });

    to.paramMap.keys.forEach((key) =>
    {
        toParams[key] = to.paramMap.get(key);
    });

    if ( isEqual(fromParams, toParams) )
    {
        return false;
    }

    // Trigger the resolver on other cases
    return true;
};

/**
 * Mails resolver
 *
 * @param route
 * @param state
 */
const mailsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const mailboxService = inject(MailboxService);
    const router = inject(Router);

    // Don't allow page param to go below 1
    if ( route.paramMap.get('page') && parseInt(route.paramMap.get('page'), 10) <= 0 )
    {
        // Get the parent url
        const url = state.url.split('/').slice(0, -1).join('/') + '/1';

        // Navigate to there
        router.navigateByUrl(url);

        // Don't allow request to go through
        return false;
    }

    // Create and build the sources array
    const sources = [];

    // If folder is set on the parameters...
    if ( route.paramMap.get('folder') )
    {
        sources.push(mailboxService.getMailsByFolder(route.paramMap.get('folder'), route.paramMap.get('page')));
    }

    // If filter is set on the parameters...
    if ( route.paramMap.get('filter') )
    {
        sources.push(mailboxService.getMailsByFilter(route.paramMap.get('filter'), route.paramMap.get('page')));
    }

    // If label is set on the parameters...
    if ( route.paramMap.get('label') )
    {
        sources.push(mailboxService.getMailsByLabel(route.paramMap.get('label'), route.paramMap.get('page')));
    }

    // Fork join all the sources
    return forkJoin(sources)
        .pipe(
            finalize(() =>
            {
                // If there is no selected mail, reset the mail every
                // time mail list changes. This will ensure that the
                // mail will be reset while navigating between the
                // folders/filters/labels, but it won't reset on page
                // reload if we are reading a mail.

                // Try to get the current activated route
                let currentRoute = route;
                while ( currentRoute.firstChild )
                {
                    currentRoute = currentRoute.firstChild;
                }

                // Make sure there is no 'id' parameter on the current route
                if ( !currentRoute.paramMap.get('id') )
                {
                    // Reset the mail
                    mailboxService.resetMail().subscribe();
                }
            }),

            // Error here means the requested page is not available
            catchError((error) =>
            {
                // Log the error
                console.error(error.message);

                // Get the parent url and append the last possible page number to the parent url
                const url = state.url.split('/').slice(0, -1).join('/') + '/' + error.pagination.lastPage;

                // Navigate to there
                router.navigateByUrl(url);

                // Throw an error
                return throwError(error);
            }),
        );
};

/**
 * Mail resolver
 *
 * @param route
 * @param state
 */
const mailResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const mailboxService = inject(MailboxService);
    const router = inject(Router);

    return mailboxService.getMailById(route.paramMap.get('id'))
        .pipe(
            // Error here means the requested mail is either
            // not available on the requested page or not
            // available at all
            catchError((error) =>
            {
                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            }),
        );
};

export default [
    {
        path      : '',
        redirectTo: 'inbox/1',
        pathMatch : 'full',
    },
    {
        path      : 'filter/:funnel',
        redirectTo: 'filter/:filter/1',
        pathMatch : 'full',
    },
    {
        path      : 'label/:label',
        redirectTo: 'label/:label/1',
        pathMatch : 'full',
    },
    {
        path      : ':folder',
        redirectTo: ':folder/1',
        pathMatch : 'full',
    },
    {
        path     : '',
        component: MailboxComponent,
        resolve  : {
            filters: () => inject(MailboxService).getFilters(),
            folders: () => inject(MailboxService).getFolders(),
            labels : () => inject(MailboxService).getLabels(),
        },
        children : [
            {
                component            : MailboxListComponent,
                matcher              : mailboxRouteMatcher,
                runGuardsAndResolvers: mailboxRunGuardsAndResolvers,
                resolve              : {
                    mails: mailsResolver,
                },
                children             : [
                    {
                        path     : '',
                        pathMatch: 'full',
                        component: MailboxEmptyDetailsComponent,
                    },
                    {
                        path     : ':id',
                        component: MailboxDetailsComponent,
                        resolve  : {
                            mail: mailResolver,
                        },
                    },
                ],
            },
            {
                path     : 'settings',
                component: MailboxSettingsComponent,
            },
        ],
    },
] as Routes;

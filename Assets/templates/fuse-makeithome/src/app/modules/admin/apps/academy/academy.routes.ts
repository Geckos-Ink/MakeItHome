import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { AcademyComponent } from 'app/modules/admin/apps/academy/academy.component';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { AcademyDetailsComponent } from 'app/modules/admin/apps/academy/details/details.component';
import { AcademyListComponent } from 'app/modules/admin/apps/academy/list/list.component';
import { catchError, throwError } from 'rxjs';

/**
 * Course resolver
 *
 * @param route
 * @param state
 */
const courseResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const academyService = inject(AcademyService);
    const router = inject(Router);

    return academyService.getCourseById(route.paramMap.get('id')).pipe(
        // Error here means the requested course is not available
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
        path     : '',
        component: AcademyComponent,
        resolve  : {
            categories: () => inject(AcademyService).getCategories(),
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: AcademyListComponent,
                resolve  : {
                    courses: () => inject(AcademyService).getCourses(),
                },
            },
            {
                path     : ':id',
                component: AcademyDetailsComponent,
                resolve  : {
                    course: courseResolver,
                },
            },
        ],
    },
] as Routes;

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { ScrumboardBoardComponent } from 'app/modules/admin/apps/scrumboard/board/board.component';
import { ScrumboardBoardsComponent } from 'app/modules/admin/apps/scrumboard/boards/boards.component';
import { ScrumboardCardComponent } from 'app/modules/admin/apps/scrumboard/card/card.component';
import { Board } from 'app/modules/admin/apps/scrumboard/scrumboard.models';
import { ScrumboardService } from 'app/modules/admin/apps/scrumboard/scrumboard.service';
import { catchError, Observable, throwError } from 'rxjs';

/**
 * Board resolver
 *
 * @param route
 * @param state
 */
const boardResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Board> =>
{
    const scrumboardService = inject(ScrumboardService);
    const router = inject(Router);

    return scrumboardService.getBoard(route.paramMap.get('boardId'))
        .pipe(
            // Error here means the requested board is not available
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

/**
 * Card resolver
 *
 * @param route
 * @param state
 */
const cardResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const scrumboardService = inject(ScrumboardService);
    const router = inject(Router);

    return scrumboardService.getCard(route.paramMap.get('cardId'))
        .pipe(
            // Error here means the requested card is not available
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
        component: ScrumboardBoardsComponent,
        resolve  : {
            boards: () => inject(ScrumboardService).getBoards(),
        },
    },
    {
        path     : ':boardId',
        component: ScrumboardBoardComponent,
        resolve  : {
            board: boardResolver,
        },
        children : [
            {
                path     : 'card/:cardId',
                component: ScrumboardCardComponent,
                resolve  : {
                    card: cardResolver,
                },
            },
        ],
    },
] as Routes;

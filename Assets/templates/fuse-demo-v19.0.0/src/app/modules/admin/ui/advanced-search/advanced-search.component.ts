import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector       : 'advanced-search',
    templateUrl    : './advanced-search.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatButtonModule, FuseHighlightComponent, JsonPipe],
})
export class AdvancedSearchComponent implements OnInit, OnDestroy
{
    searchForm: UntypedFormGroup;
    searchFormDefaults: any = {
        keywords  : '',
        type      : 'any',
        isTrashed : false,
        isArchived: false,
        isStarred : false,
    };
    queryParams: Params;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
    )
    {
        // Prepare the search form with defaults
        this.searchForm = this._formBuilder.group({
            keywords  : [this.searchFormDefaults.keywords],
            type      : [this.searchFormDefaults.type],
            isTrashed : [this.searchFormDefaults.isTrashed],
            isArchived: [this.searchFormDefaults.isArchived],
            isStarred : [this.searchFormDefaults.isStarred],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to query params change
        this._activatedRoute.queryParams
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((queryParams) =>
            {
                // Store the query params
                this.queryParams = queryParams;

                // Fill the form with the values from query
                // params without emitting any form events
                this.searchForm.setValue({
                    keywords  : queryParams?.keywords ?? this.searchFormDefaults.keywords,
                    type      : queryParams?.type ?? this.searchFormDefaults.type,
                    isTrashed : queryParams?.isTrashed ? coerceBooleanProperty(queryParams?.isTrashed) : this.searchFormDefaults.isTrashed,
                    isArchived: queryParams?.isArchived ? coerceBooleanProperty(queryParams?.isArchived) : this.searchFormDefaults.isArchived,
                    isStarred : queryParams?.isStarred ? coerceBooleanProperty(queryParams?.isStarred) : this.searchFormDefaults.isStarred,
                }, {emitEvent: false});
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset the search form using the default
     */
    reset(): void
    {
        this.searchForm.reset(this.searchFormDefaults);
    }

    /**
     * Perform the search
     */
    search(): void
    {
        // Add query params using the router
        this._router.navigate(['./'], {
            queryParams: this.searchForm.value,
            relativeTo : this._activatedRoute,
        });
    }
}

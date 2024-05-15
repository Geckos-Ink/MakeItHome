import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NotesService } from 'app/modules/admin/apps/notes/notes.service';
import { Label } from 'app/modules/admin/apps/notes/notes.types';
import { debounceTime, filter, Observable, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
    selector       : 'notes-labels',
    templateUrl    : './labels.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, MatDialogModule, MatIconModule, MatFormFieldModule, MatInputModule, NgIf, NgFor, FormsModule, AsyncPipe],
})
export class NotesLabelsComponent implements OnInit, OnDestroy
{
    labels$: Observable<Label[]>;

    labelChanged: Subject<Label> = new Subject<Label>();
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _notesService: NotesService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the labels
        this.labels$ = this._notesService.labels$;

        // Subscribe to label updates
        this.labelChanged
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(500),
                filter(label => label.title.trim() !== ''),
                switchMap(label => this._notesService.updateLabel(label)))
            .subscribe(() =>
            {
                // Mark for check
                this._changeDetectorRef.markForCheck();
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
     * Add label
     *
     * @param title
     */
    addLabel(title: string): void
    {
        this._notesService.addLabel(title).subscribe();
    }

    /**
     * Update label
     */
    updateLabel(label: Label): void
    {
        this.labelChanged.next(label);
    }

    /**
     * Delete label
     *
     * @param id
     */
    deleteLabel(id: string): void
    {
        this._notesService.deleteLabel(id).subscribe(() =>
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}

import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { labelColorDefs, labelColors } from 'app/modules/admin/apps/mailbox/mailbox.constants';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailLabel } from 'app/modules/admin/apps/mailbox/mailbox.types';
import { debounceTime, take } from 'rxjs';

@Component({
    selector     : 'mailbox-settings',
    templateUrl  : './settings.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgClass, NgFor, MatOptionModule, NgIf],
})
export class MailboxSettingsComponent implements OnInit
{
    labelColors: any = labelColors;
    labelColorDefs: any = labelColorDefs;
    labels: MailLabel[];
    labelsForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(
        public mailboxComponent: MailboxComponent,
        private _formBuilder: UntypedFormBuilder,
        private _mailboxService: MailboxService,
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
        // Create the labels form
        this.labelsForm = this._formBuilder.group({
            labels  : this._formBuilder.array([]),
            newLabel: this._formBuilder.group({
                title: ['', Validators.required],
                color: ['orange'],
            }),
        });

        // Labels
        this._mailboxService.labels$
            .pipe(take(1))
            .subscribe((labels: MailLabel[]) =>
            {
                // Get the labels
                this.labels = labels;

                // Iterate through the labels
                labels.forEach((label) =>
                {
                    // Create a label form group
                    const labelFormGroup = this._formBuilder.group({
                        id   : [label.id],
                        title: [label.title, Validators.required],
                        slug : [label.slug],
                        color: [label.color],
                    });

                    // Add the label form group to the labels form array
                    (this.labelsForm.get('labels') as UntypedFormArray).push(labelFormGroup);
                });
            });

        // Update labels when there is a value change
        this.labelsForm.get('labels').valueChanges
            .pipe(debounceTime(500))
            .subscribe(() =>
            {
                this.updateLabels();
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add a label
     */
    addLabel(): void
    {
        // Add label to the server
        this._mailboxService.addLabel(this.labelsForm.get('newLabel').value).subscribe((addedLabel) =>
        {
            // Push the new label to the labels form array
            (this.labelsForm.get('labels') as UntypedFormArray).push(this._formBuilder.group({
                id   : [addedLabel.id],
                title: [addedLabel.title, Validators.required],
                slug : [addedLabel.slug],
                color: [addedLabel.color],
            }));

            // Reset the new label form
            this.labelsForm.get('newLabel').markAsPristine();
            this.labelsForm.get('newLabel').markAsUntouched();
            this.labelsForm.get('newLabel.title').reset();
            this.labelsForm.get('newLabel.title').clearValidators();
            this.labelsForm.get('newLabel.title').updateValueAndValidity();
        });
    }

    /**
     * Delete a label
     */
    deleteLabel(id: string): void
    {
        // Get the labels form array
        const labelsFormArray = this.labelsForm.get('labels') as UntypedFormArray;

        // Remove the label from the labels form array
        labelsFormArray.removeAt(labelsFormArray.value.findIndex(label => label.id === id));

        // Delete label on the server
        this._mailboxService.deleteLabel(id).subscribe();
    }

    /**
     * Update labels
     */
    updateLabels(): void
    {
        // Iterate through the labels form array controls
        (this.labelsForm.get('labels') as UntypedFormArray).controls.forEach((labelFormGroup) =>
        {
            // If the label has been edited...
            if ( labelFormGroup.dirty )
            {
                // Update the label on the server
                this._mailboxService.updateLabel(labelFormGroup.value.id, labelFormGroup.value).subscribe();
            }
        });

        // Reset the labels form array
        this.labelsForm.get('labels').markAsPristine();
        this.labelsForm.get('labels').markAsUntouched();
    }
}

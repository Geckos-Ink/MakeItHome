import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'mailbox-empty-details',
    templateUrl  : './empty-details.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule],
})
export class MailboxEmptyDetailsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

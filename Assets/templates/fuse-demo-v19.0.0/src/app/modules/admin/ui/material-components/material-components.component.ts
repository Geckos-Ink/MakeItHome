import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'material-components',
    templateUrl  : './material-components.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, MatIconModule, NgFor],
})
export class MaterialComponentsComponent
{
    components: any[];

    /**
     * Constructor
     */
    constructor()
    {
        this.components = [
            {
                id               : 'autocomplete',
                name             : 'Autocomplete',
                summary          : 'Suggests relevant options as the user types.',
                exampleSpecs     : {
                    prefix: 'autocomplete-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-autocomplete-testing.html',
                    },
                ],
            },
            {
                id               : 'badge',
                name             : 'Badge',
                summary          : 'A small value indicator that can be overlaid on another object.',
                exampleSpecs     : {
                    prefix: 'badge-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-badge-testing.html',
                    },
                ],
            },
            {
                id               : 'bottom-sheet',
                name             : 'Bottom Sheet',
                summary          : 'A large interactive panel primarily for mobile devices.',
                exampleSpecs     : {
                    prefix: 'bottom-sheet-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-bottom-sheet-testing.html',
                    },
                ],
            },
            {
                id               : 'button',
                name             : 'Button',
                summary          : 'An interactive button with a range of presentation options.',
                exampleSpecs     : {
                    prefix : 'button-',
                    exclude: ['button-toggle-'],
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-button-testing.html',
                    },
                ],
            },
            {
                id               : 'button-toggle',
                name             : 'Button toggle',
                summary          : 'A groupable on/off toggle for enabling and disabling options.',
                exampleSpecs     : {
                    prefix: 'button-toggle-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-button-toggle-testing.html',
                    },
                ],
            },
            {
                id               : 'card',
                name             : 'Card',
                summary          : 'A styled container for pieces of itemized content.',
                exampleSpecs     : {
                    prefix: 'card-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-card-testing.html',
                    },
                ],
            },
            {
                id               : 'checkbox',
                name             : 'Checkbox',
                summary          : 'Captures boolean input with an optional indeterminate mode.',
                exampleSpecs     : {
                    prefix: 'checkbox-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-checkbox-testing.html',
                    },
                ],
            },
            {
                id               : 'chips',
                name             : 'Chips',
                summary          : 'Presents a list of items as a set of small, tactile entities.',
                exampleSpecs     : {
                    prefix: 'chips-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-chips-testing.html',
                    },
                ],
            },
            {
                id               : 'core',
                name             : 'Core',
                summary          : 'Reusable parts used by other components in the library.',
                exampleSpecs     : {
                    prefix: 'core-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-core-testing.html',
                    },
                ],
            },
            {
                id               : 'datepicker',
                name             : 'Datepicker',
                summary          : 'Captures dates, agnostic about their internal representation.',
                exampleSpecs     : {
                    prefix: 'date',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-datepicker-testing.html',
                    },
                ],
            },
            {
                id               : 'dialog',
                name             : 'Dialog',
                summary          : 'A configurable modal that displays dynamic content.',
                exampleSpecs     : {
                    prefix: 'dialog-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-dialog-testing.html',
                    },
                ],
            },
            {
                id               : 'divider',
                name             : 'Divider',
                summary          : 'A vertical or horizontal visual divider.',
                exampleSpecs     : {
                    prefix: 'divider-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-divider-testing.html',
                    },
                ],
            },
            {
                id               : 'expansion',
                name             : 'Expansion Panel',
                summary          : 'A container which can be expanded to reveal more content.',
                exampleSpecs     : {
                    prefix: 'expansion-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-expansion-testing.html',
                    },
                ],
            },
            {
                id               : 'form-field',
                name             : 'Form field',
                summary          : 'Wraps input fields so they are displayed consistently.',
                exampleSpecs     : {
                    prefix: 'form-field-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-form-field-testing.html',
                    },
                ],
            },
            {
                id               : 'grid-list',
                name             : 'Grid list',
                summary          : 'A flexible structure for presenting content items in a grid.',
                exampleSpecs     : {
                    prefix: 'grid-list-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-grid-list-testing.html',
                    },
                ],
            },
            {
                id               : 'icon',
                name             : 'Icon',
                summary          : 'Renders a specified icon.',
                exampleSpecs     : {
                    prefix: 'icon-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-icon-testing.html',
                    },
                ],
            },
            {
                id               : 'input',
                name             : 'Input',
                summary          : 'Enables native inputs to be used within a Form field.',
                exampleSpecs     : {
                    prefix: 'input-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-input-testing.html',
                    },
                ],
            },
            {
                id               : 'list',
                name             : 'List',
                summary          : 'Presents conventional lists of items.',
                exampleSpecs     : {
                    prefix: 'list-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-list-testing.html',
                    },
                ],
            },
            {
                id               : 'menu',
                name             : 'Menu',
                summary          : 'A floating panel of nestable options.',
                exampleSpecs     : {
                    prefix: 'menu-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-menu-testing.html',
                    },
                ],
            },
            {
                id               : 'paginator',
                name             : 'Paginator',
                summary          : 'Controls for displaying paged data.',
                exampleSpecs     : {
                    prefix: 'paginator-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-paginator-testing.html',
                    },
                ],
            },
            {
                id               : 'progress-bar',
                name             : 'Progress bar',
                summary          : 'A linear progress indicator.',
                exampleSpecs     : {
                    prefix: 'progress-bar-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-progress-bar-testing.html',
                    },
                ],
            },
            {
                id               : 'progress-spinner',
                name             : 'Progress spinner',
                summary          : 'A circular progress indicator.',
                exampleSpecs     : {
                    prefix: 'progress-spinner-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-progress-spinner-testing.html',
                    },
                ],
            },
            {
                id               : 'radio',
                name             : 'Radio button',
                summary          : 'Allows the user to select one option from a group.',
                exampleSpecs     : {
                    prefix: 'radio-',

                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-radio-testing.html',
                    },
                ],
            },
            {
                id          : 'ripple',
                name        : 'Ripples',
                overviewPath: 'material/core/ripple/ripple.html',
                summary     : 'Directive for adding Material Design ripple effects',
                exampleSpecs: {
                    prefix: 'ripple-',
                },
            },
            {
                id               : 'select',
                name             : 'Select',
                summary          : 'Allows the user to select one or more options using a dropdown.',
                exampleSpecs     : {
                    prefix: 'select-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-select-testing.html',
                    },
                ],
            },
            {
                id               : 'sidenav',
                name             : 'Sidenav',
                summary          : 'A container for content that is fixed to one side of the screen.',
                exampleSpecs     : {
                    prefix: 'sidenav-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-sidenav-testing.html',
                    },
                ],
            },
            {
                id               : 'slide-toggle',
                name             : 'Slide toggle',
                summary          : 'Captures boolean values as a clickable and draggable switch.',
                exampleSpecs     : {
                    prefix: 'slide-toggle-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-slide-toggle-testing.html',
                    },
                ],
            },
            {
                id               : 'slider',
                name             : 'Slider',
                summary          : 'Allows the user to input a value by dragging along a slider.',
                exampleSpecs     : {
                    prefix: 'slider-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-slider-testing.html',
                    },
                ],
            },
            {
                id               : 'snack-bar',
                name             : 'Snackbar',
                summary          : 'Displays short actionable messages as an uninvasive alert.',
                exampleSpecs     : {
                    prefix: 'snack-bar-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-snack-bar-testing.html',
                    },
                ],
            },
            {
                id               : 'sort',
                name             : 'Sort header',
                summary          : 'Allows the user to configure how tabular data is sorted.',
                exampleSpecs     : {
                    prefix: 'sort-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-sort-testing.html',
                    },
                ],
            },
            {
                id               : 'stepper',
                name             : 'Stepper',
                summary          : 'Presents content as steps through which to progress.',
                exampleSpecs     : {
                    prefix: 'stepper-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-stepper-testing.html',
                    },
                ],
            },
            {
                id               : 'table',
                name             : 'Table',
                summary          : 'A configurable component for displaying tabular data.',
                exampleSpecs     : {
                    prefix: 'table-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-table-testing.html',
                    },
                ],
            },
            {
                id               : 'tabs',
                name             : 'Tabs',
                summary          : 'Only presents one view at a time from a provided set of views.',
                exampleSpecs     : {
                    prefix: 'tab-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-tabs-testing.html',
                    },
                ],
            },
            {
                id               : 'toolbar',
                name             : 'Toolbar',
                summary          : 'A container for top-level titles and controls.',
                exampleSpecs     : {
                    prefix: 'toolbar-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-toolbar-testing.html',
                    },
                ],
            },
            {
                id               : 'tooltip',
                name             : 'Tooltip',
                summary          : 'Displays floating content when an object is hovered.',
                exampleSpecs     : {
                    prefix: 'tooltip-',
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-tooltip-testing.html',
                    },
                ],
            },
            {
                id          : 'tree',
                name        : 'Tree',
                summary     : 'Presents hierarchical content as an expandable tree.',
                exampleSpecs: {
                    prefix: 'tree-',
                },
            },
        ];
    }
}

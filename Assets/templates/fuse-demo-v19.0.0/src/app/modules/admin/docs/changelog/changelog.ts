/* eslint-disable max-len */
import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'changelog',
    templateUrl    : './changelog.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgFor],
})
export class ChangelogComponent
{
    changelog: any[] = [

        // v19.0.0
        {
            version    : 'v19.0.0',
            releaseDate: 'Nov 20, 2023',
            changes: [
                {
                    type: 'Changed',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v17',
                        '(Dependencies) Updated various other packages',
                        '(Transloco) Updated to standalone configuration',
                        '(core) Use inject for dependencies'
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        'Rotation on some icons',
                        'Autocompleted input colors'
                    ],
                },
            ]
        },

        // v18.0.0
        {
            version    : 'v18.0.0',
            releaseDate: 'May 30, 2023',
            changes    : [
                {
                    type: 'Breaking',
                    list: [
                        '(Standalone) Updated Fuse to standalone components',
                        '(Config) Replaced NgModule configurations with Providers',
                        '(Functional) Moved to functional interceptors, guards, resolvers, etc.',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v16',
                        '(Dependencies) Updated various other packages',
                        '(Icons) Updated Heroicons'
                    ],
                },
            ],
        },

        // v17.2.0
        {
            version    : 'v17.2.0',
            releaseDate: 'Jan 19, 2023',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v15.1.1',
                        '(Dependencies) Updated various other packages',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(Angular Material) Fixed: Tooltip background color is not correct',
                    ],
                },
            ],
        },

        // v17.1.0
        {
            version    : 'v17.1.0',
            releaseDate: 'Dec 12, 2022',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v15.0.0',
                        '(Dependencies) Updated various other packages',
                        '(Core) Use the new "CanMatch" guard for routes rather than "CanLoad" & "CanActivate" combination',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(Angular Material) Fixed: Autocompleted input background color does not look right',
                        '(Angular Material) Fixed: Tailwind breaks the disabled mat-checkbox styling',
                    ],
                },
            ],
        },

        // v17.0.1
        {
            version    : 'v17.0.1',
            releaseDate: 'Nov 21, 2022',
            changes    : [
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/confirmation-dialog) Fixed: Extra padding on the confirmation dialogs',
                    ],
                },
            ],
        },

        // v17.0.0
        {
            version    : 'v17.0.0',
            releaseDate: 'Nov 18, 2022',
            changes    : [
                {
                    type: 'Breaking',
                    list: [
                        '(Dependencies) From this version up, Fuse will not be compatible with Legacy Angular Material components',
                        '(Linting) Removed linter setup and eslint packages since most of the linting happens on Editors and IDEs. This is also partly because of slow development speed of angular-eslint packages.',
                        '(.fuse-mat-textarea) Removed in favor of CSS :has selector, now textareas within "mat-form-field" components are detected automatically',
                        '(.fuse-mat-no-subscript) Removed in favor of \'subscriptSizing="dynamic"\' property of "mat-form-field"',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v15.0.0',
                        '(Dependencies) Updated various other packages',
                        '(Dependencies) Removed ngx-markdown from the package.json, it still can be used within Fuse, it\'s a part of the effort to make releasing Fuse updates easier',
                        '(General) Matched the files and folders with a newly created Angular v15 project to make things easier for the newcomers',
                        '(Angular Material) Re-wrote the override styles to make sure everything look the same as before (compatibility for MDC components)',
                        '(Theming) Re-wrote the theming system to make sure to keep everything working as before without any breaking changes',
                    ],
                },
            ],
        },

        // v16.0.0
        {
            version    : 'v16.0.0',
            releaseDate: 'Oct 04, 2022',
            changes    : [
                {
                    type: 'Breaking',
                    list: [
                        '(dependencies) Replaced moment.js with luxon, big thanks to @steveschmitt (https://github.com/steveschmitt) for the PR',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v14.2.x',
                        '(dependencies) Updated various other packages',
                        '(app.resolvers) Removed the extra user getter call since the user data already comes with the sign-in process to prevent confusion for the newcomers',
                        '(ui/forms/fields) Added examples for number input',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(FuseVerticalNavigation) Fixed: Sticky positioning breaks inside a fixed positioned parent (Firefox)',
                        '(layout/common/quick-chat) Fixed: Sticky positioning breaks inside a fixed positioned parent (Firefox)',
                        '(apps/mailbox) Fixed: Back button on details view is not working',
                    ],
                },
            ],
        },
        // v15.2.0
        {
            version    : 'v15.2.0',
            releaseDate: 'Aug 22, 2022',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v14.1.3',
                        '(dependencies) Updated various other packages',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/tailwind/plugins/theming) Simplified the plugin and added more detailed comments',
                        '(tailwind.config) Fixed: typo on comment',
                        '(tailwind) Removed the "aspect-ratio" plugin in favor of the included "aspect" utility',
                        '(layout/common/messages) Fixed: Wrong color classes on "No Messages" icon',
                        '(layout/common/notifications) Fixed: Wrong color classes on "No Notifications" icon',
                        '(layout/common/shortcuts) Fixed: Wrong color classes on "No Shortcuts" icon',
                        '(dashboards/project) Removed unnecessary classes from the buttons',
                        '(apps/mailbox) Better label toggle behavior',
                        '(apps/tasks) Better tag toggle behavior',
                        '(docs) Fixed: Typos',
                    ],
                },
            ],
        },
        // v15.1.0
        {
            version    : 'v15.1.0',
            releaseDate: 'Jul 21, 2022',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v14.1.0',
                        '(dependencies) Updated various other packages',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/overrides/angular-material) mat-hint position is not working correctly on fields',
                    ],
                },
            ],
        },
        // v15.0.0
        {
            version    : 'v15.0.0',
            releaseDate: 'Jun 03, 2022',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(@fuse/navigation) Added "fragment" and "queryParams" support along with "preserveFragment" and "queryParamsHandling" on navigation items',
                        '(@fuse/overrides/quill) Added tooltip styles for better compatibility',
                        '(@fuse/services/platform) Added platform checker service',
                        '(global) Added custom scrollbar styling for platforms other than macOS and iOS',
                        '(layout/common/search) Implemented the new MatAutocomplete "autoSelectActiveOption" functionality',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v14',
                        '(dependencies) Updated various other packages',
                        '(global) Replace @import with @use in scss files',
                        '(global) Replaced linked buttons with a tags + removed unnecessary routerLink attributes from some buttons',
                        '(global) BREAKING: Replaced iconsmind icons with heroicons and removed the iconsmind because of the bundle size concerns',
                        '(global) Replaced "FormBuilder" and "FormGroup" types with "UntypedFormBuilder" and "UntypedFormGroup"',
                        '(FuseDrawer) Updated the overlay and animation handling code for better stability',
                        '(@fuse/overrides/quill) Better scrolling for Quill editor',
                        '(auth) Made the renewing token on "sign-in-with-token" process an optional step to simplify the login process',
                        '(auth) Changed the url on "signInUsingToken" method to reflect the mock-api changes',
                        '(mock-api) Replaced the "refresh-access-token" url with "sign-in-with-token"',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/navigation) Collapse animation doesn"t work smoothly because of the parent"s margin',
                        '(@fuse/service/confirmation) Cleaned-up the dialog component',
                        '(layout) The theme settings cog is not positioned correctly in Empty layout',
                        '(auth/sign-up) Missing ngForm reference',
                        '(apps/academy) Ring outside the current step"s number is not visible',
                        '(apps/chat) Empty route related issues',
                        '(apps/chat) Empty route related issues',
                        '(apps/mailbox) Empty route related issues',
                        '(apps/mailbox) Quill editor tooltips are not positioning correctly',
                        '(mock-api/file-manager) http params are not working properly because of the new string conversion',
                        '(ui/page-layouts) Toggle button selected background is not visible',
                    ],
                },
            ],
        },
        // v14.2.0
        {
            version    : 'v14.2.0',
            releaseDate: 'Feb 21, 2022',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated various packages',
                        '(AngularCLI) Re-enabled the cache since Tailwind related issues are fixed',
                        '(@fuse/navigation) Expose the width variables as css custom properties, so they can be overridden from the outside',
                        '(@fuse/drawer) Expose the width variable as a css custom property, so it can be overridden from the outside',
                        '(@fuse/masonry) Removed the unnecessary scss file',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(layouts/dense) Fixed: Navigation appearance doesn\'t set correctly on small devices',
                    ],
                },
            ],
        },
        // v14.1.1
        {
            version    : 'v14.1.1',
            releaseDate: 'Jan 02, 2022',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated various packages',
                        '(TailwindCSS) Moved to the new syntax on Tailwind config',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(TailwindCSS) Accent and Warn colors are not being generated for themes other than the Default',
                        '(Contacts) Typo on resolve object',
                    ],
                },
            ],
        },
        // v14.1.0
        {
            version    : 'v14.1.0',
            releaseDate: 'Dec 22, 2021',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v13.1',
                        '(dependencies) Updated Tailwind to v3',
                        '(dependencies) Updated various other packages',
                        '(AngularCLI) Disabled file based cache as it causes issues with Tailwind v3',
                    ],
                },
            ],
        },
        // v14.0.0
        {
            version    : 'v14.0.0',
            releaseDate: 'Nov 11, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(FuseLoadingBar) Added the FuseLoadingBar component, its helper service and its interceptor',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v13',
                        '(dependencies) Updated various other packages',
                        '(dependencies) BREAKING: Updated RxJS to 7.4.0 and optimized import paths',
                        '(apps/calendar) BREAKING: Removed the Calendar app due to FullCalendar\'s Angular component not being properly developed',
                        '(FuseDateRange) BREAKING: Removed the FuseDateRange component, alternative: https://github.com/fetrarij/ngx-daterangepicker-material',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/overrides/angular-material) Fixed: Normal border color of the text field overrides the invalid and focus border colors on dark themes',
                        '(@fuse/navigation) Don\'t need to use interpolation on scss variables anymore since Tailwind doesn\'t cause any problems with them anymore',
                    ],
                },
            ],
        },
        // v13.6.2
        {
            version    : 'v13.6.2',
            releaseDate: 'Sep 01, 2021',
            changes    : [
                {
                    type: 'Fixed',
                    list: [
                        '(QuickChat) Fixed: Wrong css rule causing a lot of problems',
                    ],
                },
            ],
        },
        // v13.6.1
        {
            version    : 'v13.6.1',
            releaseDate: 'Aug 31, 2021',
            changes    : [
                {
                    type: 'Fixed',
                    list: [
                        '(QuickChat) Fixed: Overflowing issue',
                    ],
                },
            ],
        },
        // v13.6.0
        {
            version    : 'v13.6.0',
            releaseDate: 'Aug 31, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(QuickChat) Added the QuickChat bar',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v12.2.3',
                        '(dependencies) Updated various other packages',
                        '(layout) Separated the Settings drawer from the layout component',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/drawer) Final opacity of the overlay is not permanent due to player being destroyed right after the animation',
                    ],
                },
            ],
        },
        // v13.5.0
        {
            version    : 'v13.5.0',
            releaseDate: 'Aug 13, 2021',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        'Huge performance improvement due to Angular v12.2.0',
                        '(dependencies) Updated Angular & Angular Material to v12.2.1',
                        '(dependencies) Updated various other packages',
                        '(tailwindcss) Removed old jsdoc from the config file',
                        '(@fuse/theming) Better structuring on the themes.scss file',
                        '(@fuse) Disabled Angular Material "theme" sanity check since we use "all-component-themes" without a color map',
                        '(apps/mailbox) Style improvements',
                        'Removed empty "styles" from component decorators',
                        'Decreased budget sizes since new Fuse is a lot smaller compared to the one with the old design',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(@fuse/overrides) Quill editor is not styled correctly by default',
                        '(@fuse/confirmation) Dialog size cannot be updated using dialogRef\'s "updateSize" method',
                        '(apps/mailbox) Compose dialog doesn\'t work correctly on small height resolutions',
                        '(ui/page-layouts) Demo layout navigation appearance is not correct',
                    ],
                },
            ],
        },
        // v13.4.0
        {
            version    : 'v13.4.0',
            releaseDate: 'July 29, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(dashboards/finance) Added finance dashboard',
                        '(dashboards/crypto) Added crypto dashboard',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v12.1.4',
                        '(dependencies) Updated various other packages',
                        '(index) Updated the title, description and keywords',
                        '(dashboards/project) Light header on light themes and small adjustments in various places',
                        '(apps/contacts) Small adjustments for better consistency',
                        '(apps/ecommerce/inventory) Small adjustments for better consistency',
                        '(docs) Updated the multi language guide',
                    ],
                },
            ],
        },
        // v13.3.1
        {
            version    : 'v13.3.1',
            releaseDate: 'July 17, 2021',
            changes    : [
                {
                    type: 'Fixed',
                    list: [
                        '(fuse/confirmation) Confirmation dialog colors are not optimized for the Dark mode',
                    ],
                },
            ],
        },
        // v13.3.0
        {
            version    : 'v13.3.0',
            releaseDate: 'July 16, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(fuse/confirmation) A service to quickly configure and show confirmation dialogs',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v12.1.2',
                        '(dependencies) Updated various other packages',
                        '(dashboards/analytics) Removed unused chart options declarations',
                        '(apps/contacts) Added confirmation to the "Delete contact" action using FuseConfirmationService',
                        '(apps/ecommerce/inventory) Added confirmation to the "Delete product" action using FuseConfirmationService',
                        '(apps/scrumboard) Added confirmation to the "Delete list" action using FuseConfirmationService',
                        '(apps/tasks) Added confirmation to the "Delete task" action using FuseConfirmationService',
                        '(ui/confirmation-dialog) Created a separate page for FuseConfirmationService and put the example configurator in there for better visibility',
                        '(docs) Moved Fuse Components and Other Components into UI for better visibility and better categorization',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(transloco) Undefined fallback language causes issues in some cases',
                        '(tailwindcss) Ordered lists with "s" modifier causes builder to throw errors',
                    ],
                },
            ],
        },
        // v13.2.0
        {
            version    : 'v13.2.0',
            releaseDate: 'July 01, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(fuse/navigation) "tooltip" property to show tooltips on navigation items using MatTooltip',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v12.1.1',
                        '(dependencies) Updated various other packages',
                        '(dev-dependencies) Removed "@angular/language-service" as IDEs and Code editors include them either natively or through plugins',
                        '(Angular Material) Apply rounded styles by default',
                        '(fuse/navigation) Moved *ngIf directives into their own "ng-container" containers',
                        '(layouts) Hide the "fuse-fullscreen" button on smaller devices since they don\'t support fullscreen',
                        '(layout/common) Explicitly define the overlay position strategy properties',
                        '(apps/contacts) Explicitly define the overlay position strategy properties',
                        '(apps/mailbox) Explicitly define the overlay position strategy properties',
                        '(apps/tasks) Explicitly define the overlay position strategy properties',
                        '(tailwindcss) Breaking: Removed 5, 6 & 12 fractional spacing values since they are not used in Demo by default and they are mostly not needed because of Flex and Grid. If you happen to use them, you can manually add them back.',
                        '(docs) Updated docs',
                        '(package.json) Added "description" and "author" fields',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(fuse/drawer) Memory leak due to the animation player, thanks to Vadym Pidoplichko for coming up the issue and the solution.',
                        '(fuse/navigation) Vertical navigation blocks scroll if it\'s destroyed while in "over" mode and opened',
                        '(layouts) Header buttons are not fitting on certain layouts',
                        '(layout/settings-drawer) Issues on small screen devices',
                        '(apps/ecommerce/inventory) Tags selector border colors are not correct on dark mode',
                        '(apps/help-center) Small dark mode issues',
                        '(transloco) Language files cannot be loaded if using a base href other than "/"',
                        '(tailwindcss) Dark mode classes are not being purged correctly due to the wrong safelist entry',
                    ],
                },
            ],
        },
        // v13.1.0
        {
            version    : 'v13.1.0',
            releaseDate: 'June 15, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(fuse/fullscreen) [tooltip] & [iconTpl] inputs for customizing the trigger button',
                        '(fuse/navigation) "target" property for setting the target attribute on external links',
                        '(ui/angular-material) List of available components with links to official docs',
                        '(ui/advanced-search) An example form that uses query parameters for Advanced Search like forms',
                        '(ui/page-layouts) Tabbed version of "Simple Fullwidth" page layout',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(app.resolver) Use services to request the initial data',
                        '(core) New navigation service to request and store the navigation data',
                        '(core/user) Renamed "user.model" to "user.types" for better consistency',
                        '(layouts) Common components of layouts now requests their data directly from their service rather than getting it from route data',
                        '(layouts/common/search) Improved the autocomplete design',
                        '(apps/ecommerce/inventory) Replaced the mat-table with a custom grid for better performance & improved the mobile experience',
                        '(docs) Updated the docs to reflect the latest changes',
                        '(dependencies) Updated Angular, Angular Material & various other packages',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(fuse/navigation) First children of collapsable items don\'t have proper spacing at the top',
                        '(data/navigation) Wrong icon for "Invoice" navigation item',
                        '(data/navigation) Dashboards are missing from "Futuristic" navigation type',
                    ],
                },
            ],
        },
        // v13.0.3
        {
            version    : 'v13.0.3',
            releaseDate: 'June 03, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(apps/scrumboard) New, initial version of the Scrumboard app',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(fuse/autogrow) BREAKING: Removed "fuseAutogrow" in favor of "matTextareaAutosize" since all of its problems solved, use [matTextareaAutosize] without any vertical padding on the textarea itself',
                        '(Angular Material) Increased default MatDialog border radius to 16px for better consistency',
                        '(apps/ecommerce) Small tweaks and improvements',
                        '(apps/mailbox) Small tweaks and improvements',
                        '(angular.json) Removed "e2e" entry, fixed the styles file path for "test"',
                        '(dependencies) Updated Angular, Angular Material & various other packages',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(Angular Material) Density setting is not being applied correctly on Dark themes',
                    ],
                },
            ],
        },
        // v13.0.2
        {
            version    : 'v13.0.2',
            releaseDate: 'May 24, 2021',
            changes    : [
                {
                    type: 'Changed',
                    list: [
                        '(mockApi) Removed typings from data files',
                        '(apps/ecommerce/inventory) Performance improvements, decreased the mockApi delay',
                        '(pages/settings) Fixed: Settings container component width is not filling the container',
                    ],
                },
            ],
        },
        // v13.0.1
        {
            version    : 'v13.0.1',
            releaseDate: 'May 21, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(i18n) Added multi language support using @ngneat/transloco',
                        '(pages) Added Activities page (timeline)',
                        '(FuseNavigation) Added support for new "isActiveMatchOptions" for Basic navigation items; https://github.com/angular/angular/pull/40303',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated various packages to their latest versions',
                        '(tailwind) Use TAILWIND_MODE environment variable to activate purge on build',
                        '(overrides/angular-material) Changed the text and arrow color of mat-select on focus when it\'s used as a prefix or suffix in mat-form-field',
                        '(overrides/angular-material) Use @apply whenever it\'s possible',
                        '(eslint) Removed e2e tsconfig path as there is no default e2e solution included into Angular since v12.0.0',
                        '(eslint) Activated explicit return types on functions and methods',
                        '(core) Separated the "auth" and "icon registry" to their own modules to keep the CoreModule simple',
                        '(FuseNavigation) Added a generic return type for "getComponent" method on FuseNavigationService',
                        '(FuseNavigation) Use the generic return type for "getComponent"',
                        '(fuse) Fixed barrel exports',
                        '(layout/common) Added trackBy functions to ngFor loops in common components',
                        '(docs) Updated docs',
                    ],
                },
            ],
        },
        // v13.0.0
        {
            version    : 'v13.0.0',
            releaseDate: 'May 15, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(pages/settings) New Settings page',
                        '(support) "_redirects" file for Netlify support',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular & Angular Material to v12.0.0',
                        '(dependencies) Updated various other packages',
                        '(linting) Migrated over to the ESLint',
                        '(routing) Use "corrected" behavior for relative link resolution (https://github.com/angular/angular/pull/22394) as it\'s the default value starting from Angular v11 (https://github.com/angular/angular/pull/25609)',
                        '(refactoring) Moved *ngFor directives to their separate <ng-container> element',
                        '(apps/ecommerce) Tweaked the hover color on inventory list for better consistency',
                        '(apps/chat) Tweaked the hover color on lists for better consistency',
                        '(apps/contacts) Tweaked the hover color on contact list for better consistency',
                        '(apps/tasks) Visual improvements',
                    ],
                },
            ],
        },
        // v12.3.0
        {
            version    : 'v12.3.0',
            releaseDate: 'May 07, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(apps/notes) New Notes app',
                        '(fuse/masonry) Added a component for creating fast Masonry-like layouts',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(apps/tasks) Tweaked the hover color on tasks list for better consistency',
                        '(apps/mailbox) Adjusted the app title font size for better consistency',
                        '(apps/mailbox) Used shadow on threads for better consistency',
                    ],
                },
            ],
        },
        // v12.2.0
        {
            version    : 'v12.2.0',
            releaseDate: 'May 01, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(apps/chat) New and improvement version of Chat app',
                        '(fuse/fullscreen) Added fullscreen toggle component',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular, Angular Material and various other packages',
                        '(apps/academy) Better error handling on courses that are not exist',
                        '(apps/academy) Added missing trackBy functions to ngFor loops',
                        '(apps/mailbox) Removed unused methods',
                        '(pages/pricing) Improved the spacing of the CTA section on all pricing pages',
                    ],
                },
            ],
        },
        // v12.1.0
        {
            version    : 'v12.1.0',
            releaseDate: 'April 26, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        '(apps/academy) New and improvement version of Academy app',
                        '(icons) Material Solid icons',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        '(dependencies) Updated Angular, Angular Material and various other packages',
                        '(icons) Updated Heroicons',
                        '(icons) Updated Material Icons',
                        '(apps/file-manager) Better grid for File Manager app',
                        '(layouts/classy) Removed footer for better \'classy\' look',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        '(apps/contacts) Clicking on the checkbox on Tag select panel acts weird',
                    ],
                },
            ],
        },
        // v12.0.0
        {
            version    : 'v12.0.0',
            releaseDate: 'April 16, 2021',
            changes    : [
                {
                    type: 'Added',
                    list: [
                        'This is the new major version of the Fuse and it\'s completely different from previous versions with no upgrade path',
                        'This version requires a clean installation',
                    ],
                },
                {
                    type: 'Changed',
                    list: [
                        'Improved the look and feel',
                        'Re-wrote the entire template from scratch using Tailwind',
                        'Removed 99% of the SCSS styles in favor of Tailwind',
                        'Integrated Angular Material theming with Tailwind',
                    ],
                },
            ],
        },
    ];

    /**
     * Constructor
     */
    constructor()
    {
    }
}

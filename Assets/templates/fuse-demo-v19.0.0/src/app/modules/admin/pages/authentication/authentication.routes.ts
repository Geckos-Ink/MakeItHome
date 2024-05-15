import { Routes } from '@angular/router';
import { ConfirmationRequiredClassicComponent } from 'app/modules/admin/pages/authentication/confirmation-required/classic/confirmation-required.component';
import { ConfirmationRequiredFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/fullscreen-reversed/confirmation-required.component';
import { ConfirmationRequiredFullscreenComponent } from 'app/modules/admin/pages/authentication/confirmation-required/fullscreen/confirmation-required.component';
import { ConfirmationRequiredModernReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern-reversed/confirmation-required.component';
import { ConfirmationRequiredModernComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern/confirmation-required.component';
import { ConfirmationRequiredSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/split-screen-reversed/confirmation-required.component';
import { ConfirmationRequiredSplitScreenComponent } from 'app/modules/admin/pages/authentication/confirmation-required/split-screen/confirmation-required.component';
import { ForgotPasswordClassicComponent } from 'app/modules/admin/pages/authentication/forgot-password/classic/forgot-password.component';
import { ForgotPasswordFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/fullscreen-reversed/forgot-password.component';
import { ForgotPasswordFullscreenComponent } from 'app/modules/admin/pages/authentication/forgot-password/fullscreen/forgot-password.component';
import { ForgotPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern-reversed/forgot-password.component';
import { ForgotPasswordModernComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern/forgot-password.component';
import { ForgotPasswordSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/forgot-password/split-screen-reversed/forgot-password.component';
import { ForgotPasswordSplitScreenComponent } from 'app/modules/admin/pages/authentication/forgot-password/split-screen/forgot-password.component';
import { ResetPasswordClassicComponent } from 'app/modules/admin/pages/authentication/reset-password/classic/reset-password.component';
import { ResetPasswordFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/fullscreen-reversed/reset-password.component';
import { ResetPasswordFullscreenComponent } from 'app/modules/admin/pages/authentication/reset-password/fullscreen/reset-password.component';
import { ResetPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/modern-reversed/reset-password.component';
import { ResetPasswordModernComponent } from 'app/modules/admin/pages/authentication/reset-password/modern/reset-password.component';
import { ResetPasswordSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/split-screen-reversed/reset-password.component';
import { ResetPasswordSplitScreenComponent } from 'app/modules/admin/pages/authentication/reset-password/split-screen/reset-password.component';
import { SignInClassicComponent } from 'app/modules/admin/pages/authentication/sign-in/classic/sign-in.component';
import { SignInFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-in/fullscreen-reversed/sign-in.component';
import { SignInFullscreenComponent } from 'app/modules/admin/pages/authentication/sign-in/fullscreen/sign-in.component';
import { SignInModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-in/modern-reversed/sign-in.component';
import { SignInModernComponent } from 'app/modules/admin/pages/authentication/sign-in/modern/sign-in.component';
import { SignInSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-in/split-screen-reversed/sign-in.component';
import { SignInSplitScreenComponent } from 'app/modules/admin/pages/authentication/sign-in/split-screen/sign-in.component';
import { SignOutClassicComponent } from 'app/modules/admin/pages/authentication/sign-out/classic/sign-out.component';
import { SignOutFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-out/fullscreen-reversed/sign-out.component';
import { SignOutFullscreenComponent } from 'app/modules/admin/pages/authentication/sign-out/fullscreen/sign-out.component';
import { SignOutModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-out/modern-reversed/sign-out.component';
import { SignOutModernComponent } from 'app/modules/admin/pages/authentication/sign-out/modern/sign-out.component';
import { SignOutSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-out/split-screen-reversed/sign-out.component';
import { SignOutSplitScreenComponent } from 'app/modules/admin/pages/authentication/sign-out/split-screen/sign-out.component';
import { SignUpClassicComponent } from 'app/modules/admin/pages/authentication/sign-up/classic/sign-up.component';
import { SignUpFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-up/fullscreen-reversed/sign-up.component';
import { SignUpFullscreenComponent } from 'app/modules/admin/pages/authentication/sign-up/fullscreen/sign-up.component';
import { SignUpModernReversedComponent } from 'app/modules/admin/pages/authentication/sign-up/modern-reversed/sign-up.component';
import { SignUpModernComponent } from 'app/modules/admin/pages/authentication/sign-up/modern/sign-up.component';
import { SignUpSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/sign-up/split-screen-reversed/sign-up.component';
import { SignUpSplitScreenComponent } from 'app/modules/admin/pages/authentication/sign-up/split-screen/sign-up.component';
import { UnlockSessionClassicComponent } from 'app/modules/admin/pages/authentication/unlock-session/classic/unlock-session.component';
import { UnlockSessionFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/fullscreen-reversed/unlock-session.component';
import { UnlockSessionFullscreenComponent } from 'app/modules/admin/pages/authentication/unlock-session/fullscreen/unlock-session.component';
import { UnlockSessionModernReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/modern-reversed/unlock-session.component';
import { UnlockSessionModernComponent } from 'app/modules/admin/pages/authentication/unlock-session/modern/unlock-session.component';
import { UnlockSessionSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/split-screen-reversed/unlock-session.component';
import { UnlockSessionSplitScreenComponent } from 'app/modules/admin/pages/authentication/unlock-session/split-screen/unlock-session.component';

export default [
    // Sign in
    {
        path    : 'sign-in',
        children: [
            {
                path     : 'classic',
                component: SignInClassicComponent,
            },
            {
                path     : 'modern',
                component: SignInModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: SignInModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: SignInSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: SignInSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: SignInFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: SignInFullscreenReversedComponent,
            },
        ],
    },
    // Sign up
    {
        path    : 'sign-up',
        children: [
            {
                path     : 'classic',
                component: SignUpClassicComponent,
            },
            {
                path     : 'modern',
                component: SignUpModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: SignUpModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: SignUpSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: SignUpSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: SignUpFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: SignUpFullscreenReversedComponent,
            },
        ],
    },
    // Sign out
    {
        path    : 'sign-out',
        children: [
            {
                path     : 'classic',
                component: SignOutClassicComponent,
            },
            {
                path     : 'modern',
                component: SignOutModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: SignOutModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: SignOutSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: SignOutSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: SignOutFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: SignOutFullscreenReversedComponent,
            },
        ],
    },
    // Forgot password
    {
        path    : 'forgot-password',
        children: [
            {
                path     : 'classic',
                component: ForgotPasswordClassicComponent,
            },
            {
                path     : 'modern',
                component: ForgotPasswordModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: ForgotPasswordModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: ForgotPasswordSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: ForgotPasswordSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: ForgotPasswordFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: ForgotPasswordFullscreenReversedComponent,
            },
        ],
    },
    // Reset password
    {
        path    : 'reset-password',
        children: [
            {
                path     : 'classic',
                component: ResetPasswordClassicComponent,
            },
            {
                path     : 'modern',
                component: ResetPasswordModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: ResetPasswordModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: ResetPasswordSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: ResetPasswordSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: ResetPasswordFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: ResetPasswordFullscreenReversedComponent,
            },
        ],
    },
    // Unlock session
    {
        path    : 'unlock-session',
        children: [
            {
                path     : 'classic',
                component: UnlockSessionClassicComponent,
            },
            {
                path     : 'modern',
                component: UnlockSessionModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: UnlockSessionModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: UnlockSessionSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: UnlockSessionSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: UnlockSessionFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: UnlockSessionFullscreenReversedComponent,
            },
        ],
    },
    // Confirmation required
    {
        path    : 'confirmation-required',
        children: [
            {
                path     : 'classic',
                component: ConfirmationRequiredClassicComponent,
            },
            {
                path     : 'modern',
                component: ConfirmationRequiredModernComponent,
            },
            {
                path     : 'modern-reversed',
                component: ConfirmationRequiredModernReversedComponent,
            },
            {
                path     : 'split-screen',
                component: ConfirmationRequiredSplitScreenComponent,
            },
            {
                path     : 'split-screen-reversed',
                component: ConfirmationRequiredSplitScreenReversedComponent,
            },
            {
                path     : 'fullscreen',
                component: ConfirmationRequiredFullscreenComponent,
            },
            {
                path     : 'fullscreen-reversed',
                component: ConfirmationRequiredFullscreenReversedComponent,
            },
        ],
    },
] as Routes;

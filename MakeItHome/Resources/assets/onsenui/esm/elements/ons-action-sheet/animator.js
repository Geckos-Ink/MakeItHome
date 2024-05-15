/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import animit from '../../ons/animit.js';
import BaseAnimator from '../../ons/base-animator.js';
import iPhoneXPatch from '../../ons/iphonex-patch.js';

export class ActionSheetAnimator extends BaseAnimator {

  constructor({timing = 'linear', delay = 0, duration = 0.2} = {}) {
    super({ timing, delay, duration });
  }

  /**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */
  show(dialog, done) {
    done();
  }

  /**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */
  hide(dialog, done) {
    done();
  }
}

/**
 * Android style animator for Action Sheet.
 */
export class MDActionSheetAnimator extends ActionSheetAnimator {

  constructor({ timing = 'ease', delay = 0, duration = 0.4 } = {}) {
    super({timing, delay, duration});

    this.maskTiming = 'linear';
    this.maskDuration = 0.2;
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  show(dialog, callback) {

    animit.runAll(
      animit(dialog._mask)
        .queue({ opacity: 0 })
        .wait(this.delay)
        .queue({ opacity: 1.0 }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }),

      animit(dialog._sheet, this.def)
        .default(
          { transform: `translate3d(0, 80%, 0)`, opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        )
        .queue(done => {
          callback && callback();
          done();
        })
    );
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  hide(dialog, callback) {
    animit.runAll(

      animit(dialog._mask)
        .queue({ opacity: 1 })
        .wait(this.delay)
        .queue({ opacity: 0 }, {
          duration: this.maskDuration,
          timing: this.maskTiming
        }),

      animit(dialog._sheet, this.def)
        .default(
          { transform: 'translate3d(0, 0, 0)', opacity: 1 },
          { transform: `translate3d(0, 80%, 0)`, opacity: 0 }
        )
        .queue(done => {
          callback && callback();
          done();
        })
    );
  }
}

/**
 * iOS style animator for dialog.
 */
export class IOSActionSheetAnimator extends ActionSheetAnimator {

  constructor({ timing = 'ease', delay = 0, duration = 0.3 } = {}) {
    super({timing, delay, duration});

    this.maskTiming = 'linear';
    this.maskDuration = 0.2;
    if (iPhoneXPatch.isIPhoneXPortraitPatchActive()) {
      this.liftAmount = 'calc(100% + 48px)';
    } else if (iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
      this.liftAmount = 'calc(100% + 33px)';
    } else {
      this.liftAmount = document.body.clientHeight / 2.0 - 1 + 'px'; // avoid Forced Synchronous Layout
    }
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  show(dialog, callback) {
    animit.runAll(

      animit(dialog._mask)
      .queue({ opacity: 0 })
      .wait(this.delay)
      .queue({ opacity: 1 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }),

      animit(dialog._sheet, this.def)
        .default(
          { transform: `translate3d(0, ${this.liftAmount}, 0)` },
          { transform: 'translate3d(0, 0, 0)' }
        )
        .queue(done => {
          callback && callback();
          done();
        })
    );
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  hide(dialog, callback) {
    animit.runAll(

      animit(dialog._mask)
      .queue({ opacity: 1 })
      .wait(this.delay)
      .queue({ opacity: 0 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }),

      animit(dialog._sheet, this.def)
        .default(
          { transform: 'translate3d(0, 0, 0)' },
          { transform: `translate3d(0, ${this.liftAmount}, 0)` }
        )
        .queue(done => {
          callback && callback();
          done();
        })
    );
  }
}

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

import contentReady from '../../ons/content-ready.js';
import styler from '../../ons/styler.js';
import animit from '../../ons/animit.js';
import SplitterAnimator from './animator.js';

export default class RevealSplitterAnimator extends SplitterAnimator {

  _getSlidingElements() {
    const slidingElements = [this._content, this._mask];
    if (this._oppositeSide && this._oppositeSide.mode === 'split') {
      slidingElements.push(this._oppositeSide);
    }

    return slidingElements;
  }

  activate(sideElement) {
    super.activate(sideElement);
    if (sideElement.mode === 'collapse') {
      this._setStyles(sideElement);
    }
  }

  deactivate() {
    this._side && this._unsetStyles(this._side);
    super.deactivate();
  }

  _setStyles(sideElement) {
    styler(sideElement, {
      left: sideElement.side === 'right' ? 'auto' : 0,
      right: sideElement.side === 'right'  ? 0 : 'auto',
      zIndex: 0,
      backgroundColor: 'black',
      transform: this._generateBehindPageStyle(0).container.transform,
      display: 'none'
    });

    const splitter = sideElement.parentElement;
    contentReady(splitter, () => splitter.content && styler(splitter.content, { boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' }));
  }

  _unsetStyles(sideElement) {
    styler.clear(sideElement, 'left right zIndex backgroundColor display');
    if (sideElement._content) {
      sideElement._content.style.opacity = '';
    }

    // Check if the other side needs the common styles
    if (!this._oppositeSide || this._oppositeSide.mode === 'split') {
      sideElement.parentElement.content && styler.clear(sideElement.parentElement.content, 'boxShadow');
    }
  }

  _generateBehindPageStyle(distance) {
    const max = this.maxWidth;

    let behindDistance = (distance - max) / max * 10;
    behindDistance = isNaN(behindDistance) ? 0 : Math.max(Math.min(behindDistance, 0), -10);

    const behindTransform = `translate3d(${(this.minus ? -1 : 1) * behindDistance}%, 0, 0)`;
    const opacity = 1 + behindDistance / 100;

    return {
      content: {
        opacity
      },
      container: {
        transform: behindTransform
      }
    };
  }

  translate(distance) {
    this._side.style.display = '';
    this._side.style.zIndex = 1;
    this.maxWidth = this.maxWidth || this._getMaxWidth();
    const menuStyle = this._generateBehindPageStyle(Math.min(distance, this.maxWidth));

    if (!this._slidingElements) {
      this._slidingElements = this._getSlidingElements();
    }

    this._mask.style.display = 'block'; // Avoid content clicks

    animit.runAll(
      animit(this._slidingElements)
        .queue({
          transform: `translate3d(${this.minus + distance}px, 0, 0)`
        }),
      animit(this._side._content)
        .queue(menuStyle.content),
      animit(this._side)
        .queue(menuStyle.container)
    );
  }

  /**
   * @param {Function} done
   */
  open(done) {
    this._side.style.display = '';
    this._side.style.zIndex = 1;
    this.maxWidth = this.maxWidth || this._getMaxWidth();
    const menuStyle = this._generateBehindPageStyle(this.maxWidth);
    this._slidingElements = this._getSlidingElements();

    setTimeout(() => { // Fix: Time to update previous translate3d after changing style.display
      animit.runAll(
        animit(this._slidingElements)
          .wait(this.delay)
          .queue({
            transform: `translate3d(${this.minus + this.maxWidth}px, 0, 0)`
          }, this.def),

        animit(this._mask)
          .wait(this.delay)
          .queue({
            display: 'block'
          }),

        animit(this._side._content)
          .wait(this.delay)
          .queue(menuStyle.content, this.def),

        animit(this._side)
          .wait(this.delay)
          .queue(menuStyle.container, this.def)
          .queue(callback => {
            this._slidingElements = null;
            callback();
            done && done();
          }),
      );
    }, 1000/60);
  }

  /**
   * @param {Function} done
   */
  close(done) {
    const menuStyle = this._generateBehindPageStyle(0);
    this._slidingElements = this._getSlidingElements();

    animit.runAll(
      animit(this._slidingElements)
        .wait(this.delay)
        .queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.def),

      animit(this._mask)
        .wait(this.delay)
        .queue({
          display: 'none'
        }),

      animit(this._side._content)
        .wait(this.delay)
        .queue(menuStyle.content, this.def),

      animit(this._side)
        .wait(this.delay)
        .queue(menuStyle.container, this.def)
        .queue(callback => {
          this._slidingElements = null;
          this._side.style.zIndex = 0;
          this._side.style.display = 'none';
          this._side._content.style.opacity = '';
          done && done();
          callback();
        }),
    );
  }

  _getMaxWidth() {
    return this._side.offsetWidth;
  }
}

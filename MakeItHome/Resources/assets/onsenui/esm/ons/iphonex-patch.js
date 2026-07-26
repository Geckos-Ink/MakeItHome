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

import platform from './platform.js';

// This object should not be exposed to users. Please keep this private.
const iPhoneXPatch = {};

iPhoneXPatch.isIPhoneXPortraitPatchActive = () => {
  return document.documentElement.getAttribute('onsflag-iphonex-portrait') != null && window.innerWidth < window.innerHeight;
};

iPhoneXPatch.isIPhoneXLandscapePatchActive = () => {
  // If width === height, treat it as landscape
  return document.documentElement.getAttribute('onsflag-iphonex-landscape') != null && window.innerWidth >= window.innerHeight;
};

/**
 * Returns the safe area lengths based on the current state of the safe areas.
 */
iPhoneXPatch.getSafeAreaLengths = () => {
  if (iPhoneXPatch.isIPhoneXPortraitPatchActive() || iPhoneXPatch.isIPhoneXLandscapePatchActive()) {
    return platform.getSafeAreaInsets();
  }

  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
};

/**
 * Returns the safe area rect based on the current state of the safe areas.
 */
iPhoneXPatch.getSafeAreaDOMRect = () => {
  const insets = iPhoneXPatch.getSafeAreaLengths();
  const safeAreaRect = {
    x: insets.left,
    y: insets.top,
    width: window.innerWidth - insets.left - insets.right,
    height: window.innerHeight - insets.top - insets.bottom
  };

  return {
    ...safeAreaRect,
    left: safeAreaRect.x,
    top: safeAreaRect.y,
    right: safeAreaRect.x + safeAreaRect.width,
    bottom: safeAreaRect.y + safeAreaRect.height
  };
};

export default iPhoneXPatch;

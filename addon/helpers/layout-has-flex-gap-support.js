import { helper } from '@ember/component/helper';

// Cache this here, to ensure we only run the check once
let isSupported = undefined;

export default helper(function layoutHasFlexGapSupport() {
  return checkFlexGapIsSupported();
});

// Taken from: https://ishadeed.com/article/flexbox-gap/
function checkFlexGapIsSupported() {
  if (typeof isSupported === 'boolean') {
    return isSupported;
  }

  // create flex container with row-gap set
  let flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  flex.parentNode.removeChild(flex);

  return isSupported;
}

// This is exported here so we can test this
export function _setIsSupported(_isSupported) {
  isSupported = _isSupported;
}

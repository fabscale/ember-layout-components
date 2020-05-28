import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { isNone } from '@ember/utils';

export default helper(function layoutCssVar(_, hash) {
  let styles = [];

  Object.keys(hash).forEach((varName) => {
    let value = hash[varName];

    if (!isNone(value)) {
      styles.push(`--${varName}: ${value}`);
    }
  });

  return styles.length > 0 ? htmlSafe(styles.join('; ')) : null;
});

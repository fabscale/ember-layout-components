import { helper } from '@ember/component/helper';
import { deprecate } from '@ember/debug';

export default helper(function layoutDeprecate(
  [message, testExpression],
  options
) {
  deprecate(message, testExpression, options);
});

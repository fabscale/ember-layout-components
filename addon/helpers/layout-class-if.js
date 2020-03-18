import { helper } from '@ember/component/helper';

export default helper(function layoutClassIf([
  variable,
  compareValue,
  className
]) {
  return variable === compareValue ? className : '';
});

import { helper } from '@ember/component/helper';

export default helper(function layoutClassIf([
  variable,
  compareValue,
  className,
  classNameElse = '',
]) {
  return variable === compareValue ? className : classNameElse;
});

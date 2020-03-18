import { helper } from '@ember/component/helper';

export default helper(function layoutJoinClasses(classNames) {
  return classNames.filter(Boolean).join(' ');
});

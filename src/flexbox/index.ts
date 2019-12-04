import { Key, Styles } from '../types';
import { _flexDirectionMap, _flexDirection } from './flex-direction';
import { _flexWrapMap, _flexWrap } from './flex-wrap';
import { _flex } from './flex';
import { _flexGrow } from './flex-grow';
import { _flexShrink } from './flex-shrink';
import { _flex as flexLayout } from '../layout/display';

export * from './align-content';
export * from './align-items';
export * from './align-self';
export {
  flexRow,
  flexRowReverse,
  flexCol,
  flexColReverse,
} from './flex-direction';
export { flexGrow, flexGrow0 } from './flex-grow';
export { flexShrink, flexShrink0 } from './flex-shrink';
export { flexNoWrap, flexWrap, flexWrapReverse } from './flex-wrap';
export { flexInitial, flex1, flexAuto, flexNone } from './flex';
export * from './justify-content';
export * from './order';

const flexGrowRegex = /^grow(?:-(\S))?$/;
const flexShrinkRegex = /^shrink(?:-(\S))?$/;

export const flex = (key?: Key) => {
  if (!key) {
    return flexLayout;
  }
  if (key in _flexDirectionMap) {
    return _flexDirection(key as any);
  }
  if (key in _flexWrapMap) {
    return _flexWrap(key as any);
  }
  if (typeof key === 'string') {
    const growMatch = key.match(flexGrowRegex);
    if (growMatch) {
      const [, growKey] = growMatch;
      return _flexGrow(growKey);
    }
    const shrinkMatch = key.match(flexShrinkRegex);
    if (shrinkMatch) {
      const [, shrinkKey] = shrinkMatch;
      return _flexShrink(shrinkKey);
    }
  }
  return _flex(key);
};

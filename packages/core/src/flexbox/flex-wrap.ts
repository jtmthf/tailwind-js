import { CSSObject } from '../types';

const _flexWrap = (flexWrap: CSSObject['flexWrap']) => ({ flexWrap });

export const flexNoWrap = _flexWrap('nowrap');
export const flexWrap = _flexWrap('wrap');
export const flexWrapReverse = _flexWrap('wrap-reverse');

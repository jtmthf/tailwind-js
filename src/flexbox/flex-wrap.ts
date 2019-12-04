import css from '@emotion/css';
import { FlexWrapProperty } from 'csstype';

const NO_WRAP = 'nowrap';
const WRAP = 'wrap';
const WRAP_REVERSE = 'wrap-reverse';

export const _flexWrapMap = {
  'no-wrap': NO_WRAP,
  [WRAP]: WRAP,
  [WRAP_REVERSE]: WRAP_REVERSE,
} as const;

const __flexWrap = (flexWrap: FlexWrapProperty) => css({ flexWrap });

export const _flexWrap = (key: keyof typeof _flexWrapMap) =>
  __flexWrap(_flexWrapMap[key]);

export const flexNoWrap = __flexWrap(NO_WRAP);
export const flexWrap = __flexWrap(WRAP);
export const flexWrapReverse = __flexWrap(WRAP_REVERSE);

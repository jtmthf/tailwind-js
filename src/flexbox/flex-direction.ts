import css from '@emotion/css';
import { FlexDirectionProperty } from 'csstype';

const ROW = 'row';
const ROW_REVERSE = 'row-reverse';
const COLUMN = 'column';
const COLUMN_REVERSE = 'column-reverse';

export const _flexDirectionMap = {
  [ROW]: ROW,
  [ROW_REVERSE]: ROW_REVERSE,
  col: COLUMN,
  'col-reverse': COLUMN_REVERSE,
} as const;

const flexDirection = (flexDirection: FlexDirectionProperty) =>
  css({ flexDirection });

export const _flexDirection = (key: keyof typeof _flexDirectionMap) =>
  flexDirection(_flexDirectionMap[key]);

export const flexRow = flexDirection(ROW);
export const flexRowReverse = flexDirection(ROW_REVERSE);
export const flexCol = flexDirection(COLUMN);
export const flexColReverse = flexDirection(COLUMN_REVERSE);

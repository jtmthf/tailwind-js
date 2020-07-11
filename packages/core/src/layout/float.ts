import { CSSObject } from '../types';
import { clearBoth } from './clear';
import { table } from './display';

const float = (float: CSSObject['float']): CSSObject => ({ float });

export const floatRight = float('right');
export const floatLeft = float('left');
export const floatNone = float('none');

export const clearfix: CSSObject = {
  '&::after': {
    content: '',
    ...table,
    ...clearBoth,
  },
};

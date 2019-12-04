import { FloatProperty } from 'csstype';
import css from '@emotion/css';

const float = (float: FloatProperty) => css({ float });

export const floatRight = float('right');
export const floatLeft = float('left');
export const floatNone = float('none');

export const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

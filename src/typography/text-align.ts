import { TextAlignProperty } from 'csstype';
import css from '@emotion/css';

const textAlign = (textAlign: TextAlignProperty) => css({ textAlign });

export const textLeft = textAlign('left');
export const textCenter = textAlign('center');
export const textRight = textAlign('right');
export const textJustify = textAlign('justify');

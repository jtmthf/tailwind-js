import { CSSObject } from '../types';

const textAlign = (textAlign: CSSObject['textAlign']): CSSObject => ({
  textAlign,
});

export const textLeft = textAlign('left');
export const textCenter = textAlign('center');
export const textRight = textAlign('right');
export const textJustify = textAlign('justify');

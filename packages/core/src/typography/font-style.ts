import { CSSObject } from '../types';

const fontStyle = (fontStyle: CSSObject['fontStyle']): CSSObject => ({
  fontStyle,
});

export const italic = fontStyle('italic');
export const notItalic = fontStyle('normal');

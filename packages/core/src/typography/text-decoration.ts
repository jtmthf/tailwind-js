import { CSSObject } from '../types';

const textDecoration = (textDecoration: CSSObject['textDecoration']) => ({
  textDecoration,
});

export const underline = textDecoration('underline');
export const lineThrough = textDecoration('line-through');
export const noUnderline = textDecoration('none');

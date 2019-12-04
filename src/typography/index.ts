import { listInside, listOutside } from './list-style-position';
import { listStyleType } from './list-style-type';
import { fontFamily } from './font-family';
import { fontWeight } from './font-weight';
import { Theme } from '../theme';
import { fontSize } from './font-size';
import { textLeft, textCenter, textRight, textJustify } from './text-align';
import { color } from './text-color';

export * from './font-family';
export * from './font-size';
export * from './font-smoothing';
export * from './font-style';
export * from './font-weight';
export * from './letter-spacing';
export * from './line-height';
export * from './list-style-position';
export * from './list-style-type';
export * from './placeholder-color';
export * from './text-align';
export * from './text-color';
export * from './text-decoration';
export * from './text-transform';
export * from './vertical-align';
export * from './whitespace';
export * from './word-break';

export const list = (key: string) => {
  if (key === 'inside') {
    return listInside;
  }
  if (key === 'outside') {
    return listOutside;
  }
  return listStyleType(key);
};

export const font = (key: string) => (theme: Theme) => {
  if (key in theme.fontFamily) {
    return fontFamily(key)(theme);
  }
  return fontWeight(key)(theme);
};

export const text = (key: string) => (theme: Theme) => {
  if (key === 'left') {
    return textLeft;
  }
  if (key === 'center') {
    return textCenter;
  }
  if (key === 'right') {
    return textRight;
  }
  if (key === 'justify') {
    return textJustify;
  }
  if (key in theme.fontSize) {
    return fontSize(key)(theme);
  }
  return color(key)(theme);
};

import { Key } from '../types';
import { Theme } from '../theme';
import { _borderStyleKeys, _borderStyle } from './border-style';
import {
  borderT,
  borderR,
  borderB,
  borderL,
  borderWidth,
} from './border-width';
import { borderColor } from './border-color';

export * from './border-color';
export * from './border-radius';
export {
  borderSolid,
  borderDashed,
  borderDotted,
  borderDouble,
  borderNone,
} from './border-style';
export * from './border-width';

const borderWidthRegex = /^([trbl])(?:-(\S))?$/;

export const border = (key: Key = 'default') => (theme: Theme) => {
  if (_borderStyleKeys.has(key as string)) {
    return _borderStyle(key as string);
  }
  if (typeof key === 'string') {
    const match = key.match(borderWidthRegex);
    if (match) {
      const [, side, widthKey] = match;
      switch (side) {
        case 't':
          return borderT(widthKey)(theme);
        case 'r':
          return borderR(widthKey)(theme);
        case 'b':
          return borderB(widthKey)(theme);
        case 'l':
          return borderL(widthKey)(theme);
      }
    }
  }
  if (key in theme.borderWidth) {
    return borderWidth(key)(theme);
  }
  return borderColor(key as string)(theme);
};

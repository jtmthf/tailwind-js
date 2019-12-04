import { themeColor } from '../utils';
import { Key } from '../types';
import { Theme } from '../theme';
import css from '@emotion/css';

const lookup = themeColor('backgroundColor');

const bg = (name: string) => (variant: Key) => (theme: Theme) =>
  css({
    backgroundColor: lookup(name, variant)(theme),
  });

export const bgColor = (name: string, variant?: Key) => bg(name)(variant!);

export const bgTransparent = bg('transparent');
export const bgBlack = bg('black');
export const bgWhite = bg('white');
export const bgGray = bg('gray');
export const bgRed = bg('red');
export const bgOrange = bg('orange');
export const bgYellow = bg('yellow');
export const bgGreen = bg('green');
export const bgTeal = bg('teal');
export const bgBlue = bg('blue');
export const bgIndigo = bg('indigo');
export const bgPurple = bg('purple');
export const bgPink = bg('pink');

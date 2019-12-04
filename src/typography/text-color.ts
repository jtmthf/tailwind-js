import { Theme } from '../theme';
import css from '@emotion/css';
import { themeColor } from '../utils';

const lookup = themeColor();

export const color = (name: string, variant?: string | number) => (
  theme: Theme,
) => css({ color: lookup(name, variant)(theme) });

export const textTransparent = color('transparent');
export const textBlack = color('black');
export const textWhite = color('white');
export const textGray = (variant: string | number) => color('gray', variant);
export const textRed = (variant: string | number) => color('red', variant);
export const textOrange = (variant: string | number) =>
  color('orange', variant);
export const textYellow = (variant: string | number) =>
  color('yellow', variant);
export const textGreen = (variant: string | number) => color('green', variant);
export const textTeal = (variant: string | number) => color('teal', variant);
export const textBlue = (variant: string | number) => color('blue', variant);
export const textIndigo = (variant: string | number) =>
  color('indigo', variant);
export const textPurple = (variant: string | number) =>
  color('purple', variant);
export const textPink = (variant: string | number) => color('pink', variant);

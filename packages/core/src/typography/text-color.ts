import { themeColor } from '../utils';
import { ThemedUtil } from '../types';

const lookup = themeColor('textColor');

const textColor = (name: string) => (
  variant?: string | number,
): ThemedUtil => theme => ({
  color: lookup(name, variant)(theme),
});

export const text = (name: string, variant?: string | number) =>
  textColor(name)(variant);

export const textTransparent = text('transparent');
export const textBlack = text('black');
export const textWhite = text('white');
export const textGray = textColor('gray');
export const textRed = textColor('red');
export const textOrange = textColor('orange');
export const textYellow = textColor('yellow');
export const textGreen = textColor('green');
export const textTeal = textColor('teal');
export const textBlue = textColor('blue');
export const textIndigo = textColor('indigo');
export const textPurple = textColor('purple');
export const textPink = textColor('pink');

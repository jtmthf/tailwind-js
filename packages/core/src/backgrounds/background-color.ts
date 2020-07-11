import { themeColor } from '../utils';
import { ThemedUtil } from '../types';

const lookup = themeColor('backgroundColor');

const backgroundColor = (name: string) => (
  variant?: string | number,
): ThemedUtil => theme => ({
  backgroundColor: lookup(name, variant)(theme),
});

export const bgColor = (name: string, variant?: string | number) =>
  backgroundColor(name)(variant!);

export const bgTransparent = bgColor('transparent');
export const bgBlack = backgroundColor('black');
export const bgWhite = backgroundColor('white');
export const bgGray = backgroundColor('gray');
export const bgRed = backgroundColor('red');
export const bgOrange = backgroundColor('orange');
export const bgYellow = backgroundColor('yellow');
export const bgGreen = backgroundColor('green');
export const bgTeal = backgroundColor('teal');
export const bgBlue = backgroundColor('blue');
export const bgIndigo = backgroundColor('indigo');
export const bgPurple = backgroundColor('purple');
export const bgPink = backgroundColor('pink');

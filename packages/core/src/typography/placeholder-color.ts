import { themeColor } from '../utils';
import { ThemedUtil } from '../types';

const lookup = themeColor('placeholderColor');

const _placeholder = (name: string) => (
  variant?: string | number,
): ThemedUtil => theme => ({
  '::placeholder': {
    color: lookup(name, variant)(theme),
  },
});

export const placeholder = (name: string, variant?: string | number) =>
  _placeholder(name)(variant);

export const placeholderTransparent = placeholder('transparent');
export const placeholderBlack = placeholder('black');
export const placeholderWhite = placeholder('white');
export const placeholderGray = _placeholder('gray');
export const placeholderRed = _placeholder('red');
export const placeholderOrange = _placeholder('orange');
export const placeholderYellow = _placeholder('yellow');
export const placeholderGreen = _placeholder('green');
export const placeholderTeal = _placeholder('teal');
export const placeholderBlue = _placeholder('blue');
export const placeholderIndigo = _placeholder('indigo');
export const placeholderPurple = _placeholder('purple');
export const placeholderPink = _placeholder('pink');

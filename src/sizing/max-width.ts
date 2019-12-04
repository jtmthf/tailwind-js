import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const maxW = (key: Key) => (theme: Theme) =>
  css({ maxWidth: theme.maxWidth[key] });

export const maxWxs = maxW('xs');
export const maxWsm = maxW('sm');
export const maxWmd = maxW('md');
export const maxWlg = maxW('lg');
export const maxWxl = maxW('xl');
export const maxW2xl = maxW('2xl');
export const maxW3xl = maxW('3xl');
export const maxW4xl = maxW('4xl');
export const maxW5xl = maxW('5xl');
export const maxW6xl = maxW('6xl');
export const maxWFull = maxW('full');

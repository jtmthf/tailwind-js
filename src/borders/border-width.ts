import { Key } from '../types';
import { Theme } from '../theme';
import css from '@emotion/css';

export const borderWidth = (key: Key = 'default') => (theme: Theme) =>
  css({
    borderWidth: theme.borderWidth[key],
  });
export const borderT = (key: Key = 'default') => (theme: Theme) =>
  css({
    borderTopWidth: theme.borderWidth[key],
  });
export const borderR = (key: Key = 'default') => (theme: Theme) =>
  css({
    borderRightWidth: theme.borderWidth[key],
  });
export const borderB = (key: Key = 'default') => (theme: Theme) =>
  css({
    borderBottomWidth: theme.borderWidth[key],
  });
export const borderL = (key: Key = 'default') => (theme: Theme) =>
  css({
    borderLeftWidth: theme.borderWidth[key],
  });

export const border0 = borderWidth(0);
export const border2 = borderWidth(2);
export const border4 = borderWidth(4);
export const border8 = borderWidth(8);
export const borderT0 = borderT(0);
export const borderT2 = borderT(2);
export const borderT4 = borderT(4);
export const borderT8 = borderT(8);
export const borderR0 = borderR(0);
export const borderR2 = borderR(2);
export const borderR4 = borderR(4);
export const borderR8 = borderR(8);
export const borderB0 = borderB(0);
export const borderB2 = borderB(2);
export const borderB4 = borderB(4);
export const borderB8 = borderB(8);
export const borderL0 = borderL(0);
export const borderL2 = borderL(2);
export const borderL4 = borderL(4);
export const borderL8 = borderL(8);

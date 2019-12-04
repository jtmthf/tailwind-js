import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const shadow = (key: Key = 'default') => (theme: Theme) =>
  css({
    boxShadow: theme.boxShadow[key],
  });

export const shadowMd = shadow('md');
export const shadowLg = shadow('lg');
export const shadowXl = shadow('xl');
export const shadow2Xl = shadow('2xl');
export const shadowInner = shadow('inner');
export const shadowOutline = shadow('outline');
export const shadowNone = shadow('none');

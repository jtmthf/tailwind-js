import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const minH = (key: Key) => (theme: Theme) =>
  css({
    minHeight: theme.minHeight[key],
  });

export const minH0 = minH(0);
export const minHFull = minH('full');
export const minHScreen = minH('screen');

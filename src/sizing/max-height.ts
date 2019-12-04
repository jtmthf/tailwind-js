import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const maxH = (key: Key) => (theme: Theme) =>
  css({
    maxHeight: theme.maxHeight[key],
  });

export const maxHFull = maxH('full');
export const maxHScreen = maxH('screen');

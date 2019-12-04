import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const minW = (key: Key) => (theme: Theme) =>
  css({ minWidth: theme.minWidth[key] });

export const minW0 = minW(0);
export const minWFull = minW('full');

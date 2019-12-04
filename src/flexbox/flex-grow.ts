import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const _flexGrow = (key: Key = 'default') => (theme: Theme) =>
  css({
    flexGrow: theme.flexGrow[key],
  });

export const flexGrow = _flexGrow();
export const flexGrow0 = _flexGrow(0);

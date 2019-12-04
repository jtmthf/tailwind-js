import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const _flexShrink = (key: Key = 'default') => (theme: Theme) =>
  css({ flexShrink: theme.flexShrink[key] });

export const flexShrink = _flexShrink();
export const flexShrink0 = _flexShrink(0);

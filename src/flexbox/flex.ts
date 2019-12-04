import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const _flex = (key: Key) => (theme: Theme) =>
  css({
    flex: theme.flex[key],
  });

export const flexInitial = _flex('initial');
export const flex1 = _flex(1);
export const flexAuto = _flex('auto');
export const flexNone = _flex('none');

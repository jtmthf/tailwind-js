import { ThemedUtil } from '../types';
import { flex } from '../layout';

export const _flex = (key?: string | number): ThemedUtil => theme =>
  key
    ? {
        flex: theme.flex?.[key],
      }
    : flex;

export const flexInitial = _flex('initial');
export const flex1 = _flex(1);
export const flexAuto = _flex('auto');
export const flexNone = _flex('none');

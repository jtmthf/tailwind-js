import { Theme } from '../theme';
import css from '@emotion/css';

export const z = (key: string | number) => (theme: Theme) =>
  css({ zIndex: theme.zIndex[key] });

export const z0 = z(0);
export const z10 = z(10);
export const z20 = z(20);
export const z30 = z(30);
export const z40 = z(40);
export const z50 = z(50);
export const zAuto = z('auto');

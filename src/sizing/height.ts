import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const h = (key: Key) => (theme: Theme) =>
  css({ height: theme.height[key] });

export const h0 = h(0);
export const h1 = h(1);
export const h2 = h(2);
export const h3 = h(3);
export const h4 = h(4);
export const h5 = h(5);
export const h6 = h(6);
export const h8 = h(8);
export const h10 = h(10);
export const h12 = h(12);
export const h16 = h(16);
export const h20 = h(20);
export const h24 = h(24);
export const h32 = h(32);
export const h40 = h(40);
export const h48 = h(48);
export const h56 = h(56);
export const h64 = h(64);
export const hAuto = h('auto');
export const hpx = h('px');
export const hFull = h('full');
export const hScreen = h('screen');

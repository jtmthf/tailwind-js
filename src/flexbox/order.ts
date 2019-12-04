import css from '@emotion/css';
import { Key } from '../types';
import { Theme } from '../theme';

export const order = (key: Key) => (theme: Theme) =>
  css({ order: theme.order[key] });

export const orderFirst = order('first');
export const orderLast = order('last');
export const orderNone = order('none');
export const order1 = order(1);
export const order2 = order(2);
export const order3 = order(3);
export const order4 = order(4);
export const order5 = order(5);
export const order6 = order(6);
export const order7 = order(7);
export const order8 = order(8);
export const order9 = order(9);
export const order10 = order(10);
export const order11 = order(11);
export const order12 = order(12);

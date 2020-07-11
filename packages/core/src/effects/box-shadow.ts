import { ThemedUtil } from '../types';

export const shadow = (
  key: string | number = 'default',
): ThemedUtil => theme => ({
  boxShadow: theme.boxShadow?.[key],
});

export const shadowXs = shadow('xs');
export const shadowSm = shadow('sm');
export const shadowMd = shadow('md');
export const shadowLg = shadow('lg');
export const shadowXl = shadow('xl');
export const shadow2xl = shadow('2xl');
export const shadowInner = shadow('inner');
export const shadowOutline = shadow('outline');
export const shadowNone = shadow('none');

import { ThemedUtil } from '../types';

export const fontSize = (key: string): ThemedUtil => theme => ({
  fontSize: theme.fontSize?.[key],
});

export const textXs = fontSize('xs');
export const textSm = fontSize('sm');
export const textBase = fontSize('base');
export const textLg = fontSize('lg');
export const textXl = fontSize('xl');
export const text2Xl = fontSize('2xl');
export const text3Xl = fontSize('3xl');
export const text4Xl = fontSize('4xl');
export const text5Xl = fontSize('5xl');
export const text6Xl = fontSize('6xl');

import { ThemedUtil } from '../types';

export const strokeWidth = (key: string | number): ThemedUtil => theme => ({
  strokeWidth: theme.strokeWidth?.[key],
});

export const stroke0 = strokeWidth(0);
export const stroke1 = strokeWidth(1);
export const stroke2 = strokeWidth(2);

import { ThemedUtil } from '../types';

export const stroke = (key: string | number): ThemedUtil => theme => ({
  stroke: theme.stroke?.[key],
});

export const strokeCurrent = stroke('current');

import { ThemedUtil } from '../types';

export const gap = (key: string | number): ThemedUtil => theme => ({
  gap: theme.gap?.[key],
});
export const rowGap = (key: string | number): ThemedUtil => theme => ({
  rowGap: theme.gap?.[key],
});
export const colGap = (key: string | number): ThemedUtil => theme => ({
  columnGap: theme.gap?.[key],
});

export const gap0 = gap(0);

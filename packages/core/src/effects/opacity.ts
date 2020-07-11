import { ThemedUtil } from '../types';

export const opacity = (key: string | number): ThemedUtil => theme => ({
  opacity: theme.opacity?.[key],
});

export const opacity100 = opacity(100);
export const opacity75 = opacity(75);
export const opacity50 = opacity(50);
export const opacity25 = opacity(25);
export const opacity0 = opacity(0);

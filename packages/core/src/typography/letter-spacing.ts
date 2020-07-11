import { ThemedUtil } from '../types';

export const tracking = (key: string): ThemedUtil => theme => ({
  letterSpacing: theme.letterSpacing?.[key],
});

export const trackingTighter = tracking('tighter');
export const trackingTight = tracking('tight');
export const trackingNormal = tracking('normal');
export const trackingWide = tracking('wide');
export const trackingWider = tracking('wider');
export const trackingWidest = tracking('widest');

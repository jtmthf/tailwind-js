import css from '@emotion/css';
import { Theme } from '../theme';

export const tracking = (key: string) => (theme: Theme) =>
  css({ letterSpacing: theme.letterSpacing[key] });

export const trackingTighter = tracking('tighter');
export const trackingTight = tracking('tight');
export const trackingNormal = tracking('normal');
export const trackingWide = tracking('wide');
export const trackingWider = tracking('wider');
export const trackingWidest = tracking('widest');

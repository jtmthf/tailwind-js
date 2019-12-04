import { Theme } from '../theme';
import css from '@emotion/css';

export const leading = (key: string) => (theme: Theme) =>
  css({ lineHeight: theme.lineHeight[key] });

export const leadingNone = leading('none');
export const leadingTight = leading('tight');
export const leadingSnug = leading('snug');
export const leadingNormal = leading('normal');
export const leadingRelaxed = leading('relaxed');
export const leadingLoose = leading('loose');

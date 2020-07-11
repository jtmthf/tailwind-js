import { ThemedUtil } from '../types';

export const leading = (key: string): ThemedUtil => theme => ({
  lineHeight: theme.lineHeight?.[key],
});

export const leadingNone = leading('none');
export const leadingTight = leading('tight');
export const leadingSnug = leading('snug');
export const leadingNormal = leading('normal');
export const leadingRelaxed = leading('relaxed');
export const leadingLoose = leading('loose');

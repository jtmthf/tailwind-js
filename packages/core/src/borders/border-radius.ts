import { apply } from '../utils';
import { ThemedUtil } from '../types';

export const rounded = (
  key: string | number = 'default',
): ThemedUtil => theme => ({
  borderRadius: theme.borderRadius?.[key],
});
export const roundedTL = (
  key: string | number = 'default',
): ThemedUtil => theme => ({ borderTopLeftRadius: theme.borderRadius?.[key] });
export const roundedTR = (
  key: string | number = 'default',
): ThemedUtil => theme => ({ borderTopRightRadius: theme.borderRadius?.[key] });
export const roundedBR = (
  key: string | number = 'default',
): ThemedUtil => theme => ({
  borderBottomRightRadius: theme.borderRadius?.[key],
});
export const roundedBL = (
  key: string | number = 'default',
): ThemedUtil => theme => ({
  borderBottomLeftRadius: theme.borderRadius?.[key],
});
export const roundedT = (key?: string | number) =>
  apply(roundedTL(key), roundedTR(key));
export const roundedR = (key?: string | number) =>
  apply(roundedTR(key), roundedBR(key));
export const roundedB = (key?: string | number) =>
  apply(roundedBR(key), roundedBL(key));
export const roundedL = (key?: string | number) =>
  apply(roundedTL(key), roundedBL(key));

export const roundedNone = rounded('none');
export const roundedSM = rounded('sm');
export const roundedLG = rounded('lg');
export const roundedFull = rounded('full');

export const roundedTNone = roundedT('none');
export const roundedRNone = roundedR('none');
export const roundedBNone = roundedB('none');
export const roundedLNone = roundedL('none');

export const roundedTSM = roundedT('sm');
export const roundedRSM = roundedR('sm');
export const roundedBSM = roundedB('sm');
export const roundedLSM = roundedL('sm');

export const roundedTLG = roundedT('lg');
export const roundedRLG = roundedR('lg');
export const roundedBLG = roundedB('lg');
export const roundedLLG = roundedL('lg');

export const roundedTFull = roundedT('full');
export const roundedRFull = roundedR('full');
export const roundedBFull = roundedB('full');
export const roundedLFull = roundedL('full');

export const roundedTLNone = roundedTL('none');
export const roundedTRNone = roundedTR('none');
export const roundedBRNone = roundedBR('none');
export const roundedBLNone = roundedBL('none');

export const roundedTLSM = roundedTL('sm');
export const roundedTRSM = roundedTR('sm');
export const roundedBRSM = roundedBR('sm');
export const roundedBLSM = roundedBL('sm');

export const roundedTLLG = roundedTL('lg');
export const roundedTRLG = roundedTR('lg');
export const roundedBRLG = roundedBR('lg');
export const roundedBLLG = roundedBL('lg');

export const roundedTLFull = roundedTL('full');
export const roundedTRFull = roundedTR('full');
export const roundedBRFull = roundedBR('full');
export const roundedBLFull = roundedBL('full');

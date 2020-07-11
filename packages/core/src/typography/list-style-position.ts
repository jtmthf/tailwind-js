import { CSSObject } from '../types';

const listStylePosition = (
  listStylePosition: CSSObject['listStylePosition'],
): CSSObject => ({ listStylePosition });

export const listInside = listStylePosition('inside');
export const listOutside = listStylePosition('outside');

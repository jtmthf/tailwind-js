import { ThemedUtil } from '../types';

export const listStyleType = (key: string): ThemedUtil => theme => ({
  listStyleType: theme.listStyleType?.[key],
});

export const listNone = listStyleType('none');
export const listDisc = listStyleType('disc');
export const listDecimal = listStyleType('decimal');

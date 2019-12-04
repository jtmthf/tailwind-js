import { Theme } from '../theme';
import css from '@emotion/css';

export const listStyleType = (key: string) => (theme: Theme) =>
  css({ listStyleType: theme.listStyleType[key] });

export const listNone = listStyleType('none');
export const listDisc = listStyleType('disc');
export const listDecimal = listStyleType('decimal');

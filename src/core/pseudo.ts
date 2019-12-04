import { Styles } from '../types';
import { Theme } from '../theme';
import { apply } from '../utils';
import css from '@emotion/css';
import { Pseudos } from 'csstype';

export const pseudo = (pseudo: Pseudos | (() => string)) => (
  ...styles: Styles[]
) => (theme: Theme) => css`
  &${typeof pseudo === 'string' ? pseudo : pseudo()} {
    ${apply(...styles)(theme)}
  }
`;

export const group = 'group';

export const hover = pseudo(':hover');
export const focus = pseudo(':focus');
export const active = pseudo(':active');
export const disabled = pseudo(':disabled');
export const visited = pseudo(':visited');
export const first = pseudo(':first-child');
export const last = pseudo(':last-child');
export const odd = pseudo(() => ':nth-child(odd)');
export const even = pseudo(() => 'nth-child(even)');
export const groupHover = pseudo(() => `.${group}:hover`);
export const focusWithin = pseudo(':focus-within');

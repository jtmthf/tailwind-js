import { Styles, ThemedUtil } from '../types';
import { apply } from '../utils';

export const pseudo = (key: string) => (
  ...styles: Styles[]
): ThemedUtil => theme => ({
  [`&${key}`]: apply(...styles)(theme),
});

export const group = 'group';

export const hover = pseudo(':hover');
export const focus = pseudo(':focus');
export const active = pseudo(':active');
export const disabled = pseudo(':disabled');
export const visited = pseudo(':visited');
export const first = pseudo(':first-child');
export const last = pseudo(':last-child');
export const odd = pseudo(':nth-child(odd)');
export const even = pseudo('nth-child(even)');
export const groupHover = pseudo(`.${group}:hover`);
export const groupFocus = pseudo(`.${group}:focus`);
export const focusWithin = pseudo(':focus-within');

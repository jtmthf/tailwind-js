import { Styles, ThemedUtil } from '../types';
import { apply } from '../utils';

export const media = (key: string) => (
  ...styles: Styles[]
): ThemedUtil => theme => ({
  [`@media (min-width: ${theme.screens?.[key]})`]: apply(...styles)(theme),
});

export const sm = media('sm');
export const md = media('md');
export const lg = media('lg');
export const xl = media('xl');

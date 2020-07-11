import { CSSObject } from '../types';

const position = (position: CSSObject['position']) => ({ position });

export const staticPosition = position('static');
export const fixed = position('fixed');
export const absolute = position('absolute');
export const relative = position('relative');
export const sticky = position('sticky');

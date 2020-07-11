import { CSSObject } from '../types';

const clear = (clear: CSSObject['clear']): CSSObject => ({ clear });

export const clearLeft = clear('left');
export const clearRight = clear('right');
export const clearBoth = clear('both');
export const clearNone = clear('none');

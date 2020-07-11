import { CSSObject } from '../types';

const content = (alignContent: CSSObject['alignContent']) => ({ alignContent });

export const contentStart = content('flex-start');
export const contentCenter = content('center');
export const contentEnd = content('flex-end');
export const contentBetween = content('space-between');
export const contentAround = content('space-around');

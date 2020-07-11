import { CSSObject } from '../types';

const justify = (justifyContent: CSSObject['justifyContent']) => ({
  justifyContent,
});

export const justifyStart = justify('flex-start');
export const justifyCenter = justify('center');
export const justifyEnd = justify('flex-end');
export const justifyBetween = justify('space-between');
export const justifyAround = justify('space-around');

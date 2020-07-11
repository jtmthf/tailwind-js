import { CSSObject } from '../types';

const self = (alignSelf: CSSObject['alignSelf']) => ({ alignSelf });

export const selfAuto = self('auto');
export const selfStart = self('flex-start');
export const selfCenter = self('center');
export const selfEnd = self('flex-end');
export const selfStretch = self('stretch');

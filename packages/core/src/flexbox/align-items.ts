import { CSSObject } from '../types';

const alignItems = (alignItems: CSSObject['alignItems']) => ({ alignItems });

export const itemsStretch = alignItems('stretch');
export const itemsStart = alignItems('flex-start');
export const itemsCenter = alignItems('center');
export const itemsEnd = alignItems('flex-end');
export const itemsBaseline = alignItems('baseline');

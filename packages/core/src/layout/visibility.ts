import { CSSObject } from '../types';

const visibility = (visibility: CSSObject['visibility']) => ({ visibility });

export const visible = visibility('visible');
export const invisible = visibility('hidden');

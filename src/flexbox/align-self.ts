import css from '@emotion/css';
import { AlignSelfProperty } from 'csstype';

const alignSelf = (alignSelf: AlignSelfProperty) => css({ alignSelf });

export const selfAuto = alignSelf('auto');
export const selfStart = alignSelf('flex-start');
export const selfCenter = alignSelf('center');
export const selfEnd = alignSelf('flex-end');
export const selfStretch = alignSelf('stretch');

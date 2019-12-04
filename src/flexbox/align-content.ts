import css from '@emotion/css';
import { AlignContentProperty } from 'csstype';

const alignContent = (alignContent: AlignContentProperty) =>
  css({ alignContent });

export const contentStart = alignContent('flex-start');
export const contentCenter = alignContent('center');
export const contentEnd = alignContent('flex-end');
export const contentBetween = alignContent('space-between');
export const contentAround = alignContent('space-around');

import css from '@emotion/css';
import { JustifyContentProperty } from 'csstype';

const justify = (justifyContent: JustifyContentProperty) =>
  css({ justifyContent });

export const justifyStart = justify('flex-start');
export const justifyCenter = justify('center');
export const justifyEnd = justify('flex-end');
export const justifyBetween = justify('space-between');
export const justifyAround = justify('space-around');

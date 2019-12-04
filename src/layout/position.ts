import { PositionProperty } from 'csstype';
import css from '@emotion/css';

const position = (position: PositionProperty) => css({ position });

export const staticPosition = position('static');
export const fixed = position('fixed');
export const absolute = position('absolute');
export const relative = position('relative');
export const sticky = position('sticky');

import { ObjectFitProperty } from 'csstype';
import css from '@emotion/css';

const objectFit = (objectFit: ObjectFitProperty) => css({ objectFit });

export const objectContain = objectFit('contain');
export const objectCover = objectFit('cover');
export const objectFill = objectFit('fill');
export const objectNone = objectFit('none');
export const objectScaleDown = objectFit('scale-down');

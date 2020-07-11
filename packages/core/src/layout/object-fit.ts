import { CSSObject } from '../types';

const objectFit = (objectFit: CSSObject['objectFit']): CSSObject => ({
  objectFit,
});

export const objectContain = objectFit('contain');
export const objectCover = objectFit('cover');
export const objectFill = objectFit('fill');
export const objectNone = objectFit('none');
export const objectScaleDown = objectFit('scale-down');

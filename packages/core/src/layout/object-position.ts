import { ThemedUtil } from '../types';

export const objectPosition = (key: string): ThemedUtil => theme => ({
  objectPosition: theme.objectPosition?.[key],
});

export const objectBottom = objectPosition('bottom');
export const objectCenter = objectPosition('center');
export const objectLeft = objectPosition('left');
export const objectLeftBottom = objectPosition('left-bottom');
export const objectLeftTop = objectPosition('left-top');
export const objectRight = objectPosition('right');
export const objectRightBottom = objectPosition('right-bottom');
export const objectRightTop = objectPosition('right-top');
export const objectTop = objectPosition('top');

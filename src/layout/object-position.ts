import css from '@emotion/css';
import { Theme } from '../theme';

export const object = (key: string) => (theme: Theme) =>
  css({ objectPosition: theme.objectPosition[key] });

export const objectBottom = object('bottom');
export const objectCenter = object('center');
export const objectLeft = object('left');
export const objectLeftBottom = object('leftBottom');
export const objectLeftTop = object('leftTop');
export const objectRight = object('right');
export const objectRightBottom = object('rightBottom');
export const objectRightTop = object('rightTop');
export const objectTop = object('top');

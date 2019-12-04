import { Key } from '../types';
import { Theme } from '../theme';
import css from '@emotion/css';

export const bgPosition = (key: Key) => (theme: Theme) =>
  css({ backgroundPosition: theme.backgroundPosition[key] });

export const bgBottom = bgPosition('bottom');
export const bgCenter = bgPosition('center');
export const bgLeft = bgPosition('left');
export const bgLeftBottom = bgPosition('leftBottom');
export const bgLeftTop = bgPosition('leftTop');
export const bgRight = bgPosition('right');
export const bgRightBottom = bgPosition('rightBottom');
export const bgRightTop = bgPosition('rightTop');
export const bgTop = bgPosition('top');

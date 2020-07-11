import { CSSObject } from '../types';

const overflow = (overflow: CSSObject['overflow']) => ({ overflow });
const overflowX = (overflowX: CSSObject['overflowX']) => ({ overflowX });
const overflowY = (overflowY: CSSObject['overflowY']) => ({ overflowY });
const scrolling = (scrolling: CSSObject['WebkitOverflowScrolling']) => ({
  WebkitOverflowScrolling: scrolling,
});

export const overflowAuto = overflow('auto');
export const overflowHidden = overflow('hidden');
export const overflowVisible = overflow('visible');
export const overflowScroll = overflow('scroll');
export const overflowXAuto = overflowX('auto');
export const overflowYAuto = overflowY('auto');
export const overflowXHidden = overflowX('hidden');
export const overflowYHidden = overflowY('hidden');
export const overflowXVisible = overflowX('visible');
export const overflowYVisible = overflowY('visible');
export const overflowXScroll = overflowX('scroll');
export const overflowYScroll = overflowY('scroll');

export const scrollingTouch = scrolling('touch');
export const scrollingAuto = scrolling('auto');

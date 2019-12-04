import {
  OverflowProperty,
  OverflowXProperty,
  OverflowYProperty,
  WebkitOverflowScrollingProperty,
} from 'csstype';
import css from '@emotion/css';

const overflow = (overflow: OverflowProperty) => css({ overflow });
const overflowX = (overflowX: OverflowXProperty) => css({ overflowX });
const overflowY = (overflowY: OverflowYProperty) => css({ overflowY });
const scrolling = (scrolling: WebkitOverflowScrollingProperty) =>
  css({ WebkitOverflowScrolling: scrolling });

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

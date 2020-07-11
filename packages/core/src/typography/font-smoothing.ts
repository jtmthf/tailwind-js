import { CSSObject } from '../types';

const fontSmoothing = (webkit: string, moz = webkit): CSSObject => ({
  '-webkit-font-smoothing': webkit,
  '-moz-osx-font-smoothing': moz,
});

export const antialiased = fontSmoothing('antialiased', 'grayscale');
export const subpixelAntialiased = fontSmoothing('auto');

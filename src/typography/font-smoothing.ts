import css from '@emotion/css';

const fontSmoothing = (webkit: string, moz = webkit) => css`
  -webkit-font-smoothing: ${webkit};
  -moz-osx-font-smoothing: ${moz};
`;

export const antialiased = fontSmoothing('antialiased', 'grayscale');
export const subpixelAntialiased = fontSmoothing('auto');

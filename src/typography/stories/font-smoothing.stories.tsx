import css from '@emotion/css';
import { subpixelAntialiased, antialiased } from '../font-smoothing';

export default {
  title: 'Font Smoothing',
};

export const SubpixelAntialiasing = () => (
  <p css={subpixelAntialiased}>The quick brown fox jumped over the lazy dog.</p>
);

export const GrayscaleAntialiasing = () => (
  <p css={antialiased}>The quick brown fox jumped over the lazy dog.</p>
);

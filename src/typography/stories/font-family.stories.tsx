import { fontSans, fontSerif, fontMono } from '../font-family';
import { apply } from '../../utils';
import { sm, md, lg, xl } from '../../core';

export default {
  title: 'Font Family',
};

export const SansSerif = () => (
  <p css={fontSans}>I'm a sans-serif paragraph.</p>
);

SansSerif.storyName = 'Sans-serif';

export const Serif = () => <p css={fontSerif}>I'm a serif paragraph.</p>;

export const Monospaced = () => (
  <p css={fontMono}>I'm a monospaced paragraph.</p>
);

export const Responsive = () => (
  <p
    css={apply(
      fontSans,
      sm(fontSerif),
      md(fontMono),
      lg(fontSans),
      xl(fontSerif),
    )}
  >
    I'm a paragraph.
  </p>
);

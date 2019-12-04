import { apply } from '../../utils';
import {
  textPurple,
  textBlue,
  textGreen,
  textIndigo,
  textRed,
  textGray,
} from '../text-color';
import { textXl } from '../font-size';
import { sm, md, lg, xl, hover } from '../../core';
import { py2, px4 } from '../../spacing';
import { fontSemibold } from '../font-weight';

export default {
  title: 'Text Color',
};

export const Usage = () => (
  <div css={apply(textPurple(600), textXl)}>
    The quick brown fox jumped over the lazy dog.
  </div>
);

export const Responsive = () => (
  <div
    css={apply(
      textBlue(600),
      sm(textGreen(600)),
      md(textIndigo(600)),
      lg(textRed(600)),
      xl(textGray(900)),
      textXl,
    )}
  >
    The quick brown fox jumped over the lazy dog.
  </div>
);

export const Hover = () => (
  <button
    css={apply(textBlue(600), hover(textRed(600)), py2, px4, fontSemibold)}
  >
    Button
  </button>
);

export const ResponsiveHover = () => (
  <button
    css={apply(
      textBlue(600),
      hover(textRed(600)),
      md(textBlue(500), hover(textBlue(600))),
      py2,
      px4,
      fontSemibold,
    )}
  >
    Button
  </button>
);

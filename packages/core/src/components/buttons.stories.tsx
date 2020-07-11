/** @jsx jsx */

import { jsx } from '@emotion/react';
import { bgBlue, bgTransparent, bgWhite, bgGray } from '../backgrounds';
import { hover } from '../core';
import {
  textWhite,
  fontBold,
  textBlue,
  fontSemibold,
  textGray,
} from '../typography';
import { py, px, mr } from '../spacing';
import {
  rounded,
  roundedFull,
  borderWidth,
  borderTransparent,
  borderBlue,
  borderB,
  borderGray,
  roundedL,
  roundedR,
} from '../borders';
import { apply } from '../utils';
import { opacity, shadow } from '../effects';
import { inlineFlex } from '../layout';
import { itemsCenter } from '../flexbox';
import { fillCurrent } from '../svg';
import { w, h } from '../sizing';

export default {
  title: 'Components/Buttons',
};

export const Simple = () => (
  <button
    css={[
      bgBlue(500),
      hover(bgBlue(700)),
      textWhite,
      fontBold,
      py(2),
      px(4),
      rounded(),
    ]}
  >
    Button
  </button>
);

export const SimpleExtracted = () => {
  const btn = apply(fontBold, py(2), px(4), rounded());
  const btnBlue = apply(bgBlue(500), hover(bgBlue(700)), textWhite);

  return <button css={[btn, btnBlue]}>Button</button>;
};

export const Pill = () => (
  <button
    css={[
      bgBlue(500),
      hover(bgBlue(700)),
      textWhite,
      fontBold,
      py(2),
      px(4),
      roundedFull,
    ]}
  >
    Button
  </button>
);

export const Outline = () => (
  <button
    css={[
      bgTransparent,
      hover(bgBlue(500), textWhite, borderTransparent),
      textBlue(700),
      fontSemibold,
      py(2),
      px(4),
      borderWidth(),
      borderBlue(500),
      rounded(),
    ]}
  >
    Button
  </button>
);

export const Bordered = () => (
  <button
    css={[
      bgBlue(500),
      hover(bgBlue(700)),
      textWhite,
      fontBold,
      py(2),
      px(4),
      borderWidth(),
      borderBlue(700),
      rounded(),
    ]}
  >
    Button
  </button>
);

export const Disabled = () => (
  <button
    css={[
      bgBlue(500),
      textWhite,
      fontBold,
      py(2),
      px(4),
      rounded(),
      opacity(50),
      // cursorNotAllowed
    ]}
  >
    Button
  </button>
);

export const ThreeD = () => (
  <button
    css={[
      bgBlue(500),
      hover(bgBlue(400), borderBlue(500)),
      textWhite,
      py(2),
      px(4),
      borderB(4),
      borderBlue(700),
      rounded(),
    ]}
  >
    Button
  </button>
);

ThreeD.story = {
  name: '3D',
};

export const Elevated = () => (
  <button
    css={[
      bgWhite(),
      hover(bgGray(100)),
      textGray(800),
      fontSemibold,
      py(2),
      px(4),
      borderWidth(),
      borderGray(400),
      rounded(),
      shadow(),
    ]}
  >
    Button
  </button>
);

export const Groups = () => (
  <div css={inlineFlex}>
    <button
      css={[
        bgGray(300),
        hover(bgGray(400)),
        textGray(800),
        fontBold,
        py(2),
        px(4),
        roundedL(),
      ]}
    >
      Prev
    </button>
    <button
      css={[
        bgGray(300),
        hover(bgGray(400)),
        textGray(800),
        fontBold,
        py(2),
        px(4),
        roundedR(),
      ]}
    >
      Next
    </button>
  </div>
);

export const Icons = () => (
  <button
    css={[
      bgGray(300),
      hover(bgGray(400)),
      textGray(800),
      fontBold,
      py(2),
      px(4),
      rounded(),
      inlineFlex,
      itemsCenter,
    ]}
  >
    <svg css={[fillCurrent, w(4), h(4), mr(2)]} viewBox="0 0 20 20">
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
    <span>Download</span>
  </button>
);

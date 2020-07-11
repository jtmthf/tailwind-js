/** @jsx jsx */

import { jsx } from '@emotion/react';
import { bgRed, bgIndigo, bgOrange, bgBlue, bgTeal } from '../backgrounds';
import {
  borderRed,
  borderWidth,
  rounded,
  roundedFull,
  borderL,
  borderOrange,
  roundedT,
  borderT,
  roundedB,
  borderTeal,
  borderB,
  borderBlue,
} from '../borders';
import { sm, lg } from '../core';
import {
  absolute,
  block,
  bottom,
  inline,
  relative,
  right,
  top,
  flex,
  inlineFlex,
} from '../layout';
import { h, w } from '../sizing';
import { px, py, p, mr } from '../spacing';
import { fillCurrent } from '../svg';
import {
  fontBold,
  textRed,
  textCenter,
  textIndigo,
  leadingNone,
  uppercase,
  textXs,
  fontSemibold,
  textLeft,
  textOrange,
  textWhite,
  textSm,
  textTeal,
  textBlue,
} from '../typography';
import { itemsCenter, flexAuto } from '../flexbox';
import { opacity, shadow } from '../effects';

export default {
  title: 'Components/Alerts',
};

export const Traditional = () => (
  <div
    css={[
      bgRed(100),
      borderWidth(),
      borderRed(400),
      textRed(700),
      px(4),
      py(3),
      rounded(),
      relative,
    ]}
    role="alert"
  >
    <strong css={fontBold}>Holy smokes!</strong>
    <span css={[block, sm(inline)]}>Something seriously bad happened</span>
    <span css={[absolute, top(0), bottom(0), right(0), px(4), py(3)]}>
      <svg
        css={[fillCurrent, h(6), w(6), textRed(500)]}
        role="button"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
      </svg>
    </span>
  </div>
);

export const ModernWithBadge = () => (
  <div css={[bgIndigo(900), textCenter, py(4), lg(px(4))]}>
    <div
      css={[
        p(2),
        bgIndigo(800),
        itemsCenter,
        textIndigo(100),
        leadingNone,
        flex,
        lg(roundedFull, inlineFlex),
      ]}
      role="alert"
    >
      <span
        css={[
          flex,
          roundedFull,
          bgIndigo(500),
          uppercase,
          px(2),
          py(1),
          textXs,
          fontBold,
          mr(3),
        ]}
      >
        New
      </span>
      <span css={[fontSemibold, mr(2), textLeft, flexAuto]}>
        Get the coolest t-shirts from our brand new store
      </span>
      <svg css={[fillCurrent, opacity(75), h(4), w(4)]} viewBox="0 0 20 20">
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    </div>
  </div>
);

export const LeftAccentBorder = () => (
  <div
    css={[bgOrange(100), borderL(4), borderOrange(500), textOrange(700), p(4)]}
    role="alert"
  >
    <p css={fontBold}>Be Warned</p>
    <p>Something not ideal might be happening.</p>
  </div>
);

export const Titled = () => (
  <div role="alert">
    <div css={[bgRed(500), textWhite, fontBold, roundedT(), px(4), py(2)]}>
      Danger
    </div>
    <div
      css={[
        borderWidth(),
        borderT(0),
        borderRed(400),
        roundedB(),
        bgRed(100),
        px(4),
        py(3),
        textRed(700),
      ]}
    >
      <p>Something not ideal might be happening.</p>
    </div>
  </div>
);

export const Solid = () => (
  <div
    css={[
      flex,
      itemsCenter,
      bgBlue(500),
      textWhite,
      textSm,
      fontBold,
      px(4),
      py(3),
    ]}
    role="alert"
  >
    <svg css={[fillCurrent, w(4), h(4), mr(2)]} viewBox="0 0 20 20">
      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
    </svg>
    <p>Something happened that you should know about.</p>
  </div>
);

export const TopAccentBorder = () => (
  <div
    css={[
      bgTeal(100),
      borderT(4),
      borderTeal(500),
      roundedB(),
      textTeal(900),
      px(4),
      py(3),
      shadow('md'),
    ]}
    role="alert"
  >
    <div css={flex}>
      <div css={py(1)}>
        <svg
          css={[fillCurrent, h(6), w(6), textTeal(500), mr(4)]}
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
      </div>
      <div>
        <p css={fontBold}>Our privacy policy has changed</p>
        <p css={textSm}>Make sure you know how these changes affect you.</p>
      </div>
    </div>
  </div>
);

export const Banner = () => (
  <div
    css={[
      bgBlue(100),
      borderT(),
      borderB(),
      borderBlue(500),
      textBlue(700),
      px(4),
      py(3),
    ]}
    role="alert"
  >
    <p css={fontBold}>Informational message</p>
    <p css={textSm}>Some additional text to explain said message.</p>
  </div>
);

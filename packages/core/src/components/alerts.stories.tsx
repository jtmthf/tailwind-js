/** @jsx jsx */

import { jsx } from '@emotion/react';
import { bgRed, bgIndigo, bgOrange } from '../backgrounds';
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
} from '../typography';
import { itemsCenter, flexAuto } from '../flexbox';
import { opacity } from '../effects';

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

/** @jsx jsx */

import { jsx } from '@emotion/react';

import cardTop from './img/card-top.jpg';
import { rounded, roundedFull } from '../borders';
import { overflowHidden, inlineBlock } from '../layout';
import { shadowLg } from '../effects';
import { wFull } from '../sizing';
import { px, py, mb, mr } from '../spacing';
import {
  fontBold,
  textXl,
  textGray,
  textBase,
  textSm,
  fontSemibold,
} from '../typography';
import { bgGray } from '../backgrounds';

export default {
  title: 'Components/Cards',
};

export const Stacked = () => (
  <div css={/* maxW('sm'), */ (rounded(), overflowHidden, shadowLg)}>
    <img css={wFull} src={cardTop} alt="Sunset in the mountains" />
    <div css={[px(6), py(4)]}>
      <div css={[fontBold, textXl, mb(2)]}>The Coldest Sunset</div>
      <p css={[textGray(700), textBase]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div css={[px(6), py(4)]}>
      <span
        css={[
          inlineBlock,
          bgGray(200),
          roundedFull,
          px(3),
          py(1),
          textSm,
          fontSemibold,
          textGray(700),
          mr(2),
        ]}
      >
        #photography
      </span>
      <span
        css={[
          inlineBlock,
          bgGray(200),
          roundedFull,
          px(3),
          py(1),
          textSm,
          fontSemibold,
          textGray(700),
          mr(2),
        ]}
      >
        #travel
      </span>
      <span
        css={[
          inlineBlock,
          bgGray(200),
          roundedFull,
          px(3),
          py(1),
          textSm,
          fontSemibold,
          textGray(700),
        ]}
      >
        #winter
      </span>
    </div>
  </div>
);

/** @jsx jsx */

import { jsx } from '@emotion/react';

import mdx from './responsive-design.mdx';
import { md } from '../responsive';
import { flex, block } from '../../layout';
import { roundedLG } from '../../borders';
import { w } from '../../sizing';
import { mt, ml } from '../../spacing';
import {
  uppercase,
  trackingWide,
  textSm,
  textIndigo,
  fontBold,
  textLg,
  leadingTight,
  fontSemibold,
  textGray,
  underline,
} from '../../typography';
import { hover } from '../pseudos';

export default {
  title: 'Core Concepts/Responsive Design',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Responsive = () => (
  <div css={md(flex)}>
    <div>
      <img
        css={[roundedLG, md(w(56))]}
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        alt="Woman paying for a purchase"
      />
    </div>
    <div css={[mt(4), md(mt(0), ml(6))]}>
      <div css={[uppercase, trackingWide, textSm, textIndigo(600), fontBold]}>
        Marketing
      </div>
      <a
        href="#"
        css={[
          block,
          mt(1),
          textLg,
          leadingTight,
          fontSemibold,
          textGray(900),
          hover(underline),
        ]}
      >
        Finding customers for your new business
      </a>
      <p css={[mt(2), textGray(600)]}>
        Getting a new business off the ground is a lot of hard work. Here are
        five ideas you can use to find your first customers.
      </p>
    </div>
  </div>
);

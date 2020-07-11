/** @jsx jsx */

import { jsx } from '@emotion/react';

import mdx from './box-sizing.mdx';
import { boxBorder, boxContent } from '../box-sizing';
import { h20, w32, hFull, wFull } from '../../sizing';
import { p4 } from '../../spacing';
import { border4, borderGray } from '../../borders';
import { bgGray } from '../../backgrounds';

export default {
  title: 'Layout/Box Sizing',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const BoxBorder = () => (
  <div css={[boxBorder, h20, w32, p4, border4, borderGray(400), bgGray(200)]}>
    <div css={[hFull, wFull, bgGray(400)]} />
  </div>
);

export const BoxContent = () => (
  <div css={[boxContent, h20, w32, p4, border4, borderGray(400), bgGray(200)]}>
    <div css={[hFull, wFull, bgGray(400)]} />
  </div>
);

/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { Fragment } from 'react';

import { jsx } from '@emotion/react';
import { bgGray } from '../../backgrounds';
import { p4, px4, py2, mt2, my4, m2, p2 } from '../../spacing';
import {
  block,
  flowRoot,
  inlineBlock,
  inline,
  flex,
  inlineFlex,
  grid,
  inlineGrid,
  hidden,
  table,
  tableRowGroup,
  tableRow,
  tableCell,
} from '../display';
import { textGray, textCenter, textSm } from '../../typography';
import { flex1 } from '../../flexbox';
import { h12, wFull } from '../../sizing';
import { gap, gridCols3, colGap } from '../../grid';
import { sm, md, lg, xl } from '../../core';

export default {
  title: 'Layout/Display',
};

export const Box = () => (
  <div css={[bgGray(200), p4]}>
    <span css={[block, textGray(700), textCenter, bgGray(400), px4, py2]}>
      1
    </span>
    <span css={[block, textGray(700), textCenter, bgGray(400), px4, py2, mt2]}>
      2
    </span>
    <span css={[block, textGray(700), textCenter, bgGray(400), px4, py2, mt2]}>
      3
    </span>
  </div>
);

export const FlowRoot = () => (
  <Fragment>
    <div css={[flowRoot, bgGray(400)]}>
      <div css={[my4, block, textGray(700), textCenter, bgGray(500), px4, py2]}>
        1
      </div>
    </div>
    <div css={[flowRoot, bgGray(200)]}>
      <div css={[my4, block, textGray(700), textCenter, bgGray(400), px4, py2]}>
        2
      </div>
    </div>
  </Fragment>
);

export const InlineBlock = () => (
  <div css={bgGray(200)}>
    <div
      css={[inlineBlock, textGray(700), textCenter, bgGray(400), px4, py2, m2]}
    >
      1
    </div>
    <div
      css={[inlineBlock, textGray(700), textCenter, bgGray(400), px4, py2, m2]}
    >
      2
    </div>
    <div
      css={[inlineBlock, textGray(700), textCenter, bgGray(400), px4, py2, m2]}
    >
      3
    </div>
  </div>
);

export const Inline = () => (
  <div css={bgGray(200)}>
    <div css={[inline, textGray(700), textCenter, bgGray(400), px4, py2]}>
      1
    </div>
    <div css={[inline, textGray(700), textCenter, bgGray(400), px4, py2]}>
      2
    </div>
    <div css={[inline, textGray(700), textCenter, bgGray(400), px4, py2]}>
      3
    </div>
  </div>
);

export const Flex = () => (
  <div css={[flex, bgGray(200)]}>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      1
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      2
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      3
    </div>
  </div>
);

export const InlineFlex = () => (
  <div css={[inlineFlex, bgGray(200)]}>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      1
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      2
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      3
    </div>
  </div>
);

export const Grid = () => (
  <div css={[grid, gap(4), gridCols3]}>
    <div css={[bgGray(300), h12]}></div>
    <div css={[bgGray(500), h12]}></div>
    <div css={[bgGray(300), h12]}></div>
    <div css={[bgGray(500), h12]}></div>
    <div css={[bgGray(300), h12]}></div>
    <div css={[bgGray(500), h12]}></div>
    <div css={[bgGray(300), h12]}></div>
    <div css={[bgGray(500), h12]}></div>
    <div css={[bgGray(300), h12]}></div>
  </div>
);

export const InlineGrid = () => (
  <Fragment>
    <span css={[inlineGrid, gridCols3, colGap(4), p2, bgGray(200)]}>
      <span css={[px4, py2, textCenter, bgGray(400)]}>1</span>
      <span css={[px4, py2, textCenter, bgGray(400)]}>1</span>
      <span css={[px4, py2, textCenter, bgGray(400)]}>1</span>
    </span>
    <span css={[inlineGrid, gridCols3, colGap(4), p2, bgGray(200)]}>
      <span css={[px4, py2, textCenter, bgGray(400)]}>2</span>
      <span css={[px4, py2, textCenter, bgGray(400)]}>2</span>
      <span css={[px4, py2, textCenter, bgGray(400)]}>2</span>
    </span>
  </Fragment>
);

export const Table = () => (
  <div css={[table, wFull]}>
    <div css={tableRowGroup}>
      <div css={tableRow}>
        <div css={[tableCell, bgGray(400), textGray(700), px4, py2, textSm]}>
          A cell with more content
        </div>
        <div css={[tableCell, bgGray(200), textGray(700), px4, py2, textSm]}>
          Cell 2
        </div>
        <div css={[tableCell, bgGray(400), textGray(700), px4, py2, textSm]}>
          Cell 3
        </div>
      </div>
      <div css={tableRow}>
        <div css={[tableCell, bgGray(200), textGray(700), px4, py2, textSm]}>
          Cell 4
        </div>
        <div css={[tableCell, bgGray(400), textGray(700), px4, py2, textSm]}>
          A cell with more content
        </div>
        <div css={[tableCell, bgGray(200), textGray(700), px4, py2, textSm]}>
          Cell 6
        </div>
      </div>
    </div>
  </div>
);

export const Hidden = () => (
  <div css={[flex, bgGray(200)]}>
    <div css={[hidden, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      1
    </div>
    <div css={[textGray(700), textCenter, bgGray(400), px4, py2, m2]}>2</div>
    <div css={[textGray(700), textCenter, bgGray(400), px4, py2, m2]}>3</div>
  </div>
);

export const Responsive = () => (
  <div css={[flex, sm(inlineFlex), md(block), lg(hidden), xl(flex)]}>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      1
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      2
    </div>
    <div css={[flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2]}>
      3
    </div>
  </div>
);

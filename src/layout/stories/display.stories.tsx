import React from 'react';
import {
  block,
  inlineBlock,
  inline,
  inlineFlex,
  table,
  tableRow,
  tableCell,
  hidden,
} from '../display';
import { apply } from '../../utils';
import { px4, py2, p4 } from '../../spacing/padding';
import { bgGray } from '../../backgrounds';
import { textGray, textCenter, textSm } from '../../typography';
import { mt2, m2 } from '../../spacing';
import mdx from './display.mdx';
import { flex, flex1 } from '../../flexbox';
import { wFull } from '../../sizing';
import { sm, md, lg, xl } from '../../core';

export default {
  title: 'Layout/Display',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Block = () => (
  <div css={apply(bgGray(200), p4)}>
    <span css={apply(block, textGray(700), textCenter, bgGray(400), px4, py2)}>
      1
    </span>
    <span
      css={apply(block, textGray(700), textCenter, bgGray(400), px4, py2, mt2)}
    >
      2
    </span>
    <span
      css={apply(block, textGray(700), textCenter, bgGray(400), px4, py2, mt2)}
    >
      3
    </span>
  </div>
);

export const InlineBlock = () => (
  <div css={bgGray(200)}>
    <span
      css={apply(
        inlineBlock,
        textGray(700),
        textCenter,
        bgGray(400),
        px4,
        py2,
        m2,
      )}
    >
      1
    </span>
    <span
      css={apply(
        inlineBlock,
        textGray(700),
        textCenter,
        bgGray(400),
        px4,
        py2,
        m2,
      )}
    >
      2
    </span>
    <span
      css={apply(
        inlineBlock,
        textGray(700),
        textCenter,
        bgGray(400),
        px4,
        py2,
        m2,
      )}
    >
      3
    </span>
  </div>
);

export const Inline = () => (
  <div css={bgGray(200)}>
    <span css={apply(inline, textGray(700), textCenter, bgGray(400), px4, py2)}>
      1
    </span>
    <span css={apply(inline, textGray(700), textCenter, bgGray(400), px4, py2)}>
      2
    </span>
    <span css={apply(inline, textGray(700), textCenter, bgGray(400), px4, py2)}>
      3
    </span>
  </div>
);

export const Flex = () => (
  <div css={apply(flex(), bgGray(200))}>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      1
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      2
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      3
    </span>
  </div>
);

export const InlineFlex = () => (
  <div css={apply(inlineFlex, bgGray(200))}>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      1
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      2
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      3
    </span>
  </div>
);

export const Table = () => (
  <div css={apply(table, wFull)}>
    <div css={tableRow}>
      <div css={apply(tableCell, bgGray(400), textGray(700), px4, py2, textSm)}>
        A cell with more content
      </div>
      <div css={apply(tableCell, bgGray(200), textGray(700), px4, py2, textSm)}>
        Cell 2
      </div>
      <div css={apply(tableCell, bgGray(400), textGray(700), px4, py2, textSm)}>
        Cell 3
      </div>
    </div>
    <div css={tableRow}>
      <div css={apply(tableCell, bgGray(200), textGray(700), px4, py2, textSm)}>
        Cell 4
      </div>
      <div css={apply(tableCell, bgGray(400), textGray(700), px4, py2, textSm)}>
        A cell with more content
      </div>
      <div css={apply(tableCell, bgGray(200), textGray(700), px4, py2, textSm)}>
        Cell 6
      </div>
    </div>
  </div>
);

export const Hidden = () => (
  <div css={apply(flex(), bgGray(200))}>
    <span
      css={apply(hidden, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      1
    </span>
    <span css={apply(textGray(700), textCenter, bgGray(400), px4, py2, m2)}>
      2
    </span>
    <span css={apply(textGray(700), textCenter, bgGray(400), px4, py2, m2)}>
      3
    </span>
  </div>
);

export const Responsive = () => (
  <div
    css={apply(
      flex(),
      sm(inlineFlex),
      md(block),
      lg(hidden),
      xl(flex()),
      bgGray(200),
    )}
  >
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      1
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      2
    </span>
    <span
      css={apply(flex1, textGray(700), textCenter, bgGray(400), px4, py2, m2)}
    >
      3
    </span>
  </div>
);

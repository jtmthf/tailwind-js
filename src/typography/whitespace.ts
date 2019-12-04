import css from '@emotion/css';
import { WhiteSpaceProperty } from 'csstype';

const whiteSpace = (whiteSpace: WhiteSpaceProperty) => css({ whiteSpace });

export const whitespaceNormal = whiteSpace('normal');
export const whitespaceNoWrap = whiteSpace('nowrap');
export const whitespacePre = whiteSpace('pre');
export const whitespacePreLine = whiteSpace('pre-line');
export const whitespacePreWrap = whiteSpace('pre-wrap');

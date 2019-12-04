import { BorderStyleProperty } from 'csstype';
import { css } from '@emotion/core';

export const _borderStyleKeys = new Set([
  'solid',
  'dashed',
  'dotted',
  'double',
  'none',
]);

export const _borderStyle = (borderStyle: BorderStyleProperty) =>
  css({
    borderStyle,
  });

export const borderSolid = _borderStyle('solid');
export const borderDashed = _borderStyle('dashed');
export const borderDotted = _borderStyle('dotted');
export const borderDouble = _borderStyle('double');
export const borderNone = _borderStyle('none');

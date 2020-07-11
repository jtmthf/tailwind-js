import { TextTransformProperty } from 'csstype';
import css from '@emotion/css';

const textTransform = (textTransform: TextTransformProperty) =>
  css({ textTransform });

export const uppercase = textTransform('uppercase');
export const lowercase = textTransform('lowercase');
export const capitalize = textTransform('capitalize');
export const normalCase = textTransform('none');

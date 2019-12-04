import { TextDecorationProperty } from 'csstype';
import css from '@emotion/css';
import { TLength } from '../theme';

const textDecoration = (textDecoration: TextDecorationProperty<TLength>) =>
  css({ textDecoration });

export const underline = textDecoration('underline');
export const lineThrough = textDecoration('line-through');
export const noUnderline = textDecoration('none');

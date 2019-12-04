import { FontStyleProperty } from 'csstype';
import css from '@emotion/css';

const fontStyle = (fontStyle: FontStyleProperty) => css({ fontStyle });

export const italic = fontStyle('italic');
export const notItalic = fontStyle('normal');

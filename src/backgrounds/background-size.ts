import css from '@emotion/css';
import { Theme } from '../theme';
import { Key } from '../types';

export const bgSize = (key: Key) => (theme: Theme) =>
  css({ backgroundSize: theme.backgroundSize[key] });

export const bgAuto = bgSize('auto');
export const bgCover = bgSize('cover');
export const bgContain = bgSize('contain');

import { VerticalAlignProperty } from 'csstype';
import { TLength } from '../theme';
import css from '@emotion/css';

const vertialAlign = (vertialAlign: VerticalAlignProperty<TLength>) =>
  css({ vertialAlign });

export const alignBaseline = vertialAlign('baseline');
export const alignTop = vertialAlign('top');
export const alignMiddle = vertialAlign('middle');
export const alignBottom = vertialAlign('bottom');
export const alignTextText = vertialAlign('text-top');
export const alignTextBottom = vertialAlign('text-bottom');

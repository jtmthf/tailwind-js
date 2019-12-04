import { Theme } from '../theme';
import css from '@emotion/css';
import { ListStylePositionProperty } from 'csstype';

const listStylePosition = (listStylePosition: ListStylePositionProperty) =>
  css({ listStylePosition });

export const listInside = listStylePosition('inside');
export const listOutside = listStylePosition('outside');

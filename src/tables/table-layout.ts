import css from '@emotion/css';
import { TableLayoutProperty } from 'csstype';

const tableLayout = (tableLayout: TableLayoutProperty) => css({ tableLayout });

export const tableAuto = tableLayout('auto');
export const tableFixed = tableLayout('fixed');

import css from '@emotion/css';
import { DisplayProperty } from 'csstype';

const display = (display: DisplayProperty) => css({ display });

export const block = display('block');
export const inlineBlock = display('inline-block');
export const inline = display('inline');
export const _flex = display('flex');
export const inlineFlex = display('inline-flex');
export const table = display('table');
export const tableRow = display('table-row');
export const tableCell = display('table-cell');
export const hidden = display('none');

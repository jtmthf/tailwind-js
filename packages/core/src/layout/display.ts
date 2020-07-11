import { CSSObject } from '../types';

const display = (display: CSSObject['display']): CSSObject => ({
  display,
});

export const hidden = display('none');
export const block = display('block');
export const flowRoot = display('flow-root');
export const inlineBlock = display('inline-block');
export const inline = display('inline');
export const flex = display('flex');
export const inlineFlex = display('inline-flex');
export const grid = display('grid');
export const inlineGrid = display('inline-grid');
export const table = display('table');
export const tableCaption = display('table-caption');
export const tableCell = display('table-cell');
export const tableColumn = display('table-column');
export const tableColumnGroup = display('table-column-group');
export const tableFooterGroup = display('table-footer-group');
export const tableHeaderGroup = display('table-header-group');
export const tableRowGroup = display('table-row-group');
export const tableRow = display('table-row');

import { CSSObject } from '../types';

const boxSizing = (boxSizing: CSSObject['boxSizing']): CSSObject => ({
  boxSizing,
});

export const boxBorder = boxSizing('border-box');
export const boxContent = boxSizing('content-box');

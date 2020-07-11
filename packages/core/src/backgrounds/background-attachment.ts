import { CSSObject } from '../types';

const bgAttachment = (key: CSSObject['backgroundAttachment']) => ({
  backgroundAttachment: key,
});

export const bgFixed = bgAttachment('fixed');
export const bgLocal = bgAttachment('local');
export const bgScroll = bgAttachment('scroll');

import { BackgroundAttachmentProperty } from 'csstype';
import css from '@emotion/css';

export const _bgAttachmentKeys = ['fixed', 'local', 'scroll'] as const;

export const _bgAttachment = (attachment: typeof _bgAttachmentKeys[number]) =>
  css({ backgroundAttachment: attachment });

export const bgFixed = _bgAttachment('fixed');
export const bgLocal = _bgAttachment('local');
export const bgScroll = _bgAttachment('scroll');

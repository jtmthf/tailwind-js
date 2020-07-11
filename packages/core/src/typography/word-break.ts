import css from '@emotion/css';

export const breakNormal = css({ wordBreak: 'normal', overflowWrap: 'normal' });
export const breakWords = css({ overflowWrap: 'break-word' });
export const breakAll = css({ wordBreak: 'break-all' });
export const truncate = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

import css from '@emotion/css';

export const _bgRepeatKeys = [
  'repeat',
  'no-repeat',
  'repeat-x',
  'repeat-y',
  'round',
  'space',
] as const;

export const _bgRepeat = (backgroundRepeat: typeof _bgRepeatKeys[number]) =>
  css({ backgroundRepeat });

export const bgRepeat = _bgRepeat('repeat');
export const bgNoRepeat = _bgRepeat('no-repeat');
export const bgRepeatX = _bgRepeat('repeat-x');
export const bgRepeatY = _bgRepeat('repeat-y');
export const bgRepeatRound = _bgRepeat('round');
export const bgRepeatSpace = _bgRepeat('space');

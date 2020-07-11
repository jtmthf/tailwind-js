import { CSSObject } from '../types';

export const srOnly: CSSObject = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
};

export const notSrOnly: CSSObject = {
  position: 'static',
  width: 'auto',
  height: 'auto',
  padding: 0,
  margin: 0,
  overflow: 'visible',
  clip: 'auto',
  whiteSpace: 'normal',
};

import { Key } from '../types';
import { Theme } from '../theme';
import { _bgAttachmentKeys, _bgAttachment } from './background-attachment';
import { _bgRepeatKeys, _bgRepeat } from './background-repeat';
import { bgSize } from './background-size';
import { bgPosition } from './background-position';
import { bgColor } from './background-color';

export { bgFixed, bgLocal, bgScroll } from './background-attachment';
export * from './background-color';
export * from './background-position';
export {
  bgRepeat,
  bgNoRepeat,
  bgRepeatX,
  bgRepeatY,
  bgRepeatRound,
  bgRepeatSpace,
} from './background-repeat';
export * from './background-size';

export const bg = (key: Key) => (theme: Theme) => {
  if (_bgAttachmentKeys.includes(key as any)) {
    return _bgAttachment(key as any);
  }
  if (_bgRepeatKeys.includes(key as any)) {
    return _bgRepeat(key as any);
  }
  if (key in theme.backgroundSize) {
    return bgSize(key)(theme);
  }
  if (key in theme.backgroundPosition) {
    return bgPosition(key)(theme);
  }
  return bgColor(key as string)(theme);
};

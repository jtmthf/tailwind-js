import { CSSObject } from '../types';

const flexDirection = (flexDirection: CSSObject['flexDirection']) => ({
  flexDirection,
});

export const flexRow = flexDirection('row');
export const flexRowReverse = flexDirection('row-reverse');
export const flexCol = flexDirection('column');
export const flexColReverse = flexDirection('column-reverse');

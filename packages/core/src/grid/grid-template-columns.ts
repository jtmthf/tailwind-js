import { ThemedUtil } from '../types';

export const gridCols = (key: string | number): ThemedUtil => theme => ({
  gridTemplateColumns: theme.gridTemplateColumns?.[key],
});

export const gridCols1 = gridCols(1);
export const gridCols2 = gridCols(2);
export const gridCols3 = gridCols(3);
export const gridCols4 = gridCols(4);
export const gridCols5 = gridCols(5);
export const gridCols6 = gridCols(6);
export const gridCols7 = gridCols(7);
export const gridCols8 = gridCols(8);
export const gridCols9 = gridCols(9);
export const gridCols10 = gridCols(10);
export const gridCols11 = gridCols(11);
export const gridCols12 = gridCols(12);

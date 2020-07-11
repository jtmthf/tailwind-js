import { ThemedUtil } from '../types';

export const fontWeight = (key: string): ThemedUtil => theme => ({
  fontWeight: theme.fontWeight?.[key],
});

export const fontHairline = fontWeight('hairline');
export const fontThin = fontWeight('thin');
export const fontLight = fontWeight('light');
export const fontNormal = fontWeight('normal');
export const fontMedium = fontWeight('medium');
export const fontSemibold = fontWeight('semibold');
export const fontBold = fontWeight('bold');
export const fontExtrabold = fontWeight('extrabold');
export const fontBlack = fontWeight('900');

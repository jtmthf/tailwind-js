import { ThemedUtil } from '../types';

export const fontFamily = (key: string): ThemedUtil => theme => ({
  fontFamily: theme.fontFamily?.[key],
});

export const fontSans = fontFamily('sans');
export const fontSerif = fontFamily('serif');
export const fontMono = fontFamily('mono');

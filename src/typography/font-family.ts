import { Theme } from '../theme';
import css from '@emotion/css';

export const fontFamily = (key: string) => (theme: Theme) =>
  css({ fontFamily: theme.fontFamily[key] });

export const fontSans = fontFamily('sans');
export const fontSerif = fontFamily('serif');
export const fontMono = fontFamily('mono');

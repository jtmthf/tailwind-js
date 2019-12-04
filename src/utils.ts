import { Styles } from './types';
import { Theme } from './theme';
import css from '@emotion/css';

export const apply = (...styles: Styles[]) => (theme: Theme) =>
  css(
    ...styles.map(style =>
      typeof style === 'function' ? style(theme) : style,
    ),
  );

export const themeColor = (key: keyof Theme = 'colors') => (
  name: string,
  variant?: string | number,
) => {
  const [outer, inner = variant] = name.split('-');
  return (theme: Theme): string =>
    inner ? (theme[key] as any)[outer][inner] : theme[key][outer];
};

export const pair = <T>(value: T) => [value, value] as const;

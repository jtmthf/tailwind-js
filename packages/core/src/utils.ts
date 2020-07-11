import { Theme, Styles, CSSObject } from './types';

export const apply = (...styles: Styles[]) => (theme: Theme): CSSObject =>
  Object.assign(
    {},
    ...styles.map(style =>
      typeof style === 'function' ? style(theme) : style,
    ),
  );

export const themeColor = (key: keyof Theme = 'colors') => (
  name: string,
  variant?: string | number | undefined,
) => {
  const [outer, inner = variant] = name.split('-');
  return (theme: Theme) =>
    inner ? theme[key][outer][inner] : theme[key][outer];
};

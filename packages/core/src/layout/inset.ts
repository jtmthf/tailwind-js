import { Theme } from '../types';
import { apply } from '../utils';

export const top = (key: string | number) => (theme: Theme) => ({
  top: theme.inset?.[key],
});
export const right = (key: string | number) => (theme: Theme) => ({
  right: theme.inset?.[key],
});
export const bottom = (key: string | number) => (theme: Theme) => ({
  bottom: theme.inset?.[key],
});
export const left = (key: string | number) => (theme: Theme) => ({
  left: theme.inset?.[key],
});

export const insetY = (key: string | number) => apply(top(key), bottom(key));
export const insetX = (key: string | number) => apply(right(key), left(key));
export const inset = (key: string | number) => apply(insetX(key), insetY(key));

export const inset0 = inset(0);
export const insetY0 = insetY(0);
export const insetX0 = insetX(0);
export const top0 = top(0);
export const right0 = right(0);
export const bottom0 = bottom(0);
export const left0 = left(0);
export const insetAuto = inset('auto');
export const insetYAuto = insetY('auto');
export const insetXAuto = insetX('auto');
export const topAuto = top('auto');
export const bottomAuto = bottom('auto');
export const leftAuto = left('auto');
export const rightAuto = right('auto');

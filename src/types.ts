import { Theme } from './theme';
import { SerializedStyles } from '@emotion/css';

export type Styles = ((theme: Theme) => SerializedStyles) | SerializedStyles;

export type Key = string | number;

export type MapKey<T extends ReadonlyMap<any, any>> = T extends ReadonlyMap<
  infer K,
  any
>
  ? K
  : never;

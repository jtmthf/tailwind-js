import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined;
}

export type Styles = ((theme: Theme) => CSSObject) | CSSObject;

export type ThemedUtil = (theme: Theme) => CSSObject;

export type ThemeKey<T = string> = {
  [key: string]: T;
};

export type ColorValue =
  | CSSObject['color']
  | {
      [variant: number]: CSSObject['color'];
    };

export type ColorKey = ThemeKey<ColorValue>;

export type Container = {
  center?: boolean;
  padding?:
    | string
    | {
        [breakpoint: string]: string;
      };
};

export type Theme = Partial<{
  screens: ThemeKey;
  colors: ColorKey;
  spacing: ThemeKey;
  backgroundColor: ColorKey;
  backgroundOpacity: ThemeKey<CSSObject['opacity']>;
  backgroundPosition: ThemeKey<CSSObject['backgroundPosition']>;
  backgroundSize: ThemeKey<CSSObject['backgroundSize']>;
  borderColor: ColorKey;
  borderOpacity: ThemeKey<CSSObject['opacity']>;
  borderRadius: ThemeKey<CSSObject['borderRadius']>;
  borderWidth: ThemeKey<CSSObject['borderWidth']>;
  boxShadow: ThemeKey<CSSObject['boxShadow']>;
  container: Container;
  cursor: ThemeKey<CSSObject['cursor']>;
  divideColor: ColorKey;
  divideOpacity: ThemeKey<CSSObject['opacity']>;
  divideWidth: ThemeKey<CSSObject['borderWidth']>;
  fill: ThemeKey<CSSObject['fill']>;
  flex: ThemeKey<CSSObject['flex']>;
  flexGrow: ThemeKey<CSSObject['flexGrow']>;
  flexShrink: ThemeKey<CSSObject['flexShrink']>;
  fontFamily: ThemeKey<CSSObject['fontFamily']>;
  fontSize: ThemeKey<CSSObject['fontSize']>;
  fontWeight: ThemeKey<CSSObject['fontWeight']>;
  height: ThemeKey<CSSObject['height']>;
  inset: ThemeKey<CSSObject['inset']>;
  letterSpacing: ThemeKey<CSSObject['letterSpacing']>;
  lineHeight: ThemeKey<CSSObject['lineHeight']>;
  listStyleType: ThemeKey<CSSObject['listStyleType']>;
  margin: ThemeKey<CSSObject['margin']>;
  maxHeight: ThemeKey<CSSObject['maxHeight']>;
  maxWidth: ThemeKey<CSSObject['maxWidth']>;
  minHeight: ThemeKey<CSSObject['minHeight']>;
  minWidth: ThemeKey<CSSObject['minWidth']>;
  objectPosition: ThemeKey<CSSObject['objectPosition']>;
  opacity: ThemeKey<CSSObject['opacity']>;
  order: ThemeKey<CSSObject['order']>;
  padding: ThemeKey<CSSObject['padding']>;
  placeholderColor: ColorKey;
  placeholderOpacity: ThemeKey<CSSObject['opacity']>;
  space: ThemeKey;
  stroke: ThemeKey<CSSObject['stroke']>;
  strokeWidth: ThemeKey<CSSObject['strokeWidth']>;
  textColor: ColorKey;
  textOpacity: ThemeKey<CSSObject['opacity']>;
  width: ThemeKey<CSSObject['width']>;
  zIndex: ThemeKey<CSSObject['zIndex']>;
  gap: ThemeKey;
  gridTemplateColumns: ThemeKey<CSSObject['gridTemplateColumns']>;
  gridColumn: ThemeKey<CSSObject['gridColumn']>;
  gridColumnStart: ThemeKey<CSSObject['gridColumnStart']>;
  gridColumnEnd: ThemeKey<CSSObject['gridColumnEnd']>;
  gridTemplateRows: ThemeKey<CSSObject['gridTemplateRows']>;
  gridRow: ThemeKey<CSSObject['gridRow']>;
  gridRowStart: ThemeKey<CSSObject['gridRowStart']>;
  gridRowEnd: ThemeKey<CSSObject['gridRowEnd']>;
  transformOrigin: ThemeKey<CSSObject['transformOrigin']>;
  scale: ThemeKey<CSSObject['scale']>;
  rotate: ThemeKey<CSSObject['rotate']>;
  translate: ThemeKey<CSSObject['translate']>;
  skew: ThemeKey<CSSObject['skew']>;
  transitionProperty: ThemeKey<CSSObject['transitionProperty']>;
  transitionTimingFunction: ThemeKey<CSSObject['transitionTimingFunction']>;
  transitionDuration: ThemeKey<CSSObject['transitionDuration']>;
  transitionDelay: ThemeKey<CSSObject['transitionDelay']>;
}>;

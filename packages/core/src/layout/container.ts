import * as breakpoints from '../core/responsive';
import { ThemedUtil } from '../types';
import { apply } from '../utils';
import { mxAuto } from '../spacing';

export const container: ThemedUtil = theme => {
  const padding = theme.container?.padding;
  const defaultPadding =
    typeof padding === 'object' ? padding.default : padding;

  return apply(
    { width: '100%' },
    ...(['sm', 'md', 'lg', 'xl'] as const).map(screen =>
      breakpoints[screen]({
        maxWidth: theme.screens?.[screen],
        padding: typeof padding === 'object' ? padding[screen] : undefined,
      })(theme),
    ),
    theme.container?.center && mxAuto,
    { padding: defaultPadding },
  )(theme);
};

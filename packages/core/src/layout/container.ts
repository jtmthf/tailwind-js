import * as breakpoints from '../core/responsive';
import { ThemedUtil } from '../types';
import { apply } from '../utils';

// TODO read from container theme
export const container: ThemedUtil = theme =>
  apply(
    { width: '100%' },
    ...(['sm', 'md', 'lg', 'xl'] as const).map(screen =>
      breakpoints[screen]({ maxWidth: theme.screens?.[screen] })(theme),
    ),
  )(theme);

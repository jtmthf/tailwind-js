import css from '@emotion/css';
import * as breakpoints from '../core/responsive';
import { Theme } from '../theme';

export const container = (theme: Theme) =>
  css(
    { width: '100%' },
    ...(['sm', 'md', 'lg', 'xl'] as const).map(screen =>
      breakpoints[screen](css({ maxWidth: theme.screens[screen] }))(theme),
    ),
  );

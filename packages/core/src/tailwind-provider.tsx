import React, { ReactNode } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ThemeProvider } from '@emotion/react';

const { theme } = resolveConfig();

export const TailwindProvider = ({ children }: { children?: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

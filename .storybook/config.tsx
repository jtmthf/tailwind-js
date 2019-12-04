import requireContext from 'require-context.macro';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme, Preflight } from '../src';

addDecorator(storyFn => (
  <ThemeProvider theme={defaultTheme}>
    {process.env.NODE_ENV !== 'test' && <Preflight />}
    {storyFn()}
  </ThemeProvider>
));

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: 'Extra Small',
        styles: {
          width: '375px',
          height: '100%',
        },
      },
      sm: {
        name: 'Small',
        styles: {
          width: '640px',
          height: '100%',
        },
      },
      md: {
        name: 'Medium',
        styles: {
          width: '768px',
          height: '100%',
        },
      },
      lg: {
        name: 'Large',
        styles: {
          width: '1024px',
          height: '100%',
        },
      },
      xl: {
        name: 'Extra Large',
        styles: {
          width: '1280px',
          height: '100%',
        },
      },
    },
  },
});

// automatically import all files ending in *.stories.tsx
configure(requireContext('../src', true, /\.stories\.tsx?$/), module);

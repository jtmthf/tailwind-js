import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { TailwindProvider } from '../src/tailwind-provider';

import 'tailwindcss/dist/base.css';

addDecorator(storyFn => (
  <TailwindProvider>
    {/* {process.env.NODE_ENV !== 'test' && <Preflight />} */}
    {storyFn()}
  </TailwindProvider>
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
        type: 'mobile',
      },
      sm: {
        name: 'Small',
        styles: {
          width: '640px',
          height: '100%',
        },
        type: 'mobile',
      },
      md: {
        name: 'Medium',
        styles: {
          width: '768px',
          height: '100%',
        },
        type: 'tablet',
      },
      lg: {
        name: 'Large',
        styles: {
          width: '1024px',
          height: '100%',
        },
        type: 'desktop',
      },
      xl: {
        name: 'Extra Large',
        styles: {
          width: '1280px',
          height: '100%',
        },
        type: 'desktop',
      },
    },
  },
});

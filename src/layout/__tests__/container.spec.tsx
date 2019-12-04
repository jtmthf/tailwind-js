import { ThemeProvider } from 'emotion-theming';
import renderer from 'react-test-renderer';
import { container } from '../container';
import { defaultTheme } from '../../theme';

const Container = () => (
  <ThemeProvider theme={defaultTheme}>
    <div css={container} />
  </ThemeProvider>
);

test('container', () => {
  expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
});

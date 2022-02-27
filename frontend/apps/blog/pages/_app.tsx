import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';

const baseTheme = createTheme(theme);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={baseTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

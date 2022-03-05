import { MDXProvider } from '@mdx-js/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { themeAtom } from '../states/themeType';
import makeTheme, { ThemeType } from '../styles/theme';

export default function App(props: AppProps) {
  return (
    <MDXProvider components={components}>
      <RecoilRoot initializeState={({ set }) => set(themeAtom, 'light')}>
        <ThemeWrapper {...props} />
      </RecoilRoot>
    </MDXProvider>
  );
}

const components = {
  // img: ResponsiveImage,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
};

const lightTheme = makeTheme('light');
const darkTheme = makeTheme('dark');

function ThemeWrapper({ Component, pageProps }: AppProps) {
  const [type] = useRecoilState<ThemeType>(themeAtom);
  const CachedTheme = useMemo(() => {
    switch (type) {
      case 'dark':
        return darkTheme;
      case 'light':
        return lightTheme;
    }
  }, [type]);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={CachedTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

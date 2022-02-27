import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';
import { grey, blueGrey, teal, indigo, deepPurple } from '@mui/material/colors';

export type ThemeType = 'light' | 'dark';

export default function makeTheme(type: ThemeType) {
  return createTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1100, xl: 1536 } },
    palette: {
      mode: type,
      primary: blueGrey,
      secondary: grey,
    },
    typography: {
      fontSize: 16.5,
      fontFamily: `"Noto Sans CJK KR", sans-serif`,
    },
  });
}

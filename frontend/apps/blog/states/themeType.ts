import { atom } from 'recoil';
import { ThemeType } from '../styles/theme';

export const themeAtom = atom<ThemeType>({
  key: '@themeType',
  default: 'light',
});

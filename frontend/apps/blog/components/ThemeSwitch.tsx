import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { ThemeType } from '../styles/theme';
import type { SetterOrUpdater } from 'recoil';

interface Props {
  theme: ThemeType;
  setTheme: SetterOrUpdater<ThemeType>;
}

export default function ThemeSwitch({ theme, setTheme }: Props) {
  return (
    <>
      <Brightness5Icon color={theme === 'light' ? 'primary' : 'secondary'} />
      <Switch onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
      <Brightness4Icon color={theme === 'dark' ? 'primary' : 'secondary'} />
    </>
  );
}

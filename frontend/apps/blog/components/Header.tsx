import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { MaterialUISwitch } from './themeSwitch';

interface Props {}

export default function Header({}: Props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <MaterialUISwitch/>
        </Toolbar>
      </AppBar>
    </>
  );
}

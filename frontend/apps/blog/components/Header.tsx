import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Container,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../states/themeType';
import { bookNames, BookNameTypes } from '../constants';
import useDetectScrollPosition from '../hooks/useDetectScrollPosition';
import { ThemeType } from '../styles/theme';
import ThemeSwitch from './ThemeSwitch';
import { getRandomBookName, titleAtom } from '../states/title';

interface Props {}

const CustomAppbar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  boxShadow: '0 0 0 0',
  backgroundColor: 'transparent',
  borderBottom: '1px solid rgba(0,27,55,0)',
  '&.at-the-top': {
    borderBottom: '1px solid rgba(0,27,55,0.1)',
    backgroundColor: 'rgb(255,255,255)',
  },
  transitionProperty: 'all',
  transitionDuration: '0.35s',
  transitionTimingFunction: 'ease-out',
}));

const CustomShuffleIcon = styled(ShuffleIcon)(({}) => ({
  opacity: 0.2,
  transitionProperty: 'opacity',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

export default function Header({}: Props) {
  const { inPosition } = useDetectScrollPosition('top');
  const [theme, setTheme] = useRecoilState<ThemeType>(themeAtom);
  const [title, setTitle] = useRecoilState<BookNameTypes>(titleAtom);
  return (
    <>
      <CustomAppbar position="fixed" className={!inPosition ? 'at-the-top' : ''}>
        <Container maxWidth="lg">
          <Toolbar variant="dense" style={{ lineHeight: '2' }}>
            <Tooltip title="랜덤" placement="left">
              <CustomShuffleIcon
                color="secondary"
                style={{ position: 'relative', top: -2 }}
                onClick={() => setTitle(getRandomBookName())}
              />
            </Tooltip>
            <Box sx={{ width: '1vw' }} />
            <Typography variant="h6" color="primary" noWrap>
              {title}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button size="large" style={{ lineHeight: '1' }}>
              이력
            </Button>
            <Button size="large" style={{ lineHeight: '1' }}>
              블로그
            </Button>
            <Box sx={{ width: '3vw' }} />
            <ThemeSwitch {...{ setTheme, theme }} />
          </Toolbar>
        </Container>
      </CustomAppbar>
    </>
  );
}

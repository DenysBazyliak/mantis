// hooks
import { useEffect } from 'react';
import useConfig from 'hooks/useConfig';

// outlets
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Container, Toolbar } from '@mui/material';

// project import
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import MainDrawer from './Drawer';
import navigation from 'menu-items';
import { dispatch } from 'store';
import { openDrawer } from 'store/reducers/menu';

// types
import { MenuOrientation } from 'types/config';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      dispatch(openDrawer(!matchDownXL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownXL]);

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <MainDrawer />
        <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              ...(container && { px: { xs: 0, sm: 2 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
            <Outlet />
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;

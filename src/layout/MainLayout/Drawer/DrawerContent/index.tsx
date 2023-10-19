// material-ui
import { useMediaQuery, useTheme, Box, Button, Typography } from '@mui/material';

// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import { useSelector } from 'store';
import { Icon } from '../../../../sections/dashboard/Icon';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '1550px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alightContent: 'center'
      }}
    >
      <Navigation />
      {drawerOpen && !matchDownMD && (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <NavCard />
          <Button sx={{ width: drawerOpen ? '260px' : '60px', marginBottom: '20px', marginTop: '10px', display:'flex', justifyContent: 'flex-start', padding:'15px' }}>
            <Icon iconName={'outlineLogout'} rotate={false} iconSize={16} iconColor={'#262626'} />
            <Typography variant={'body2'} sx={{ color: '#262626' }}>
              Log Out
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DrawerContent;

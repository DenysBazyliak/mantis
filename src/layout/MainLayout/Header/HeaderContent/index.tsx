// material-ui
import { Theme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import Customization from './Customization';
import MobileSection from './MobileSection';

// types

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      {!downLG && <Search />}
      <Notification />
      <Customization />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
};

export default HeaderContent;

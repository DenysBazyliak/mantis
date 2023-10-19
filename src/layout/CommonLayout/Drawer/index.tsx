import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer, TextField } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import DrawerContent from './DrawerContent';
import { DRAWER_WIDTH } from 'config';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| COMPONENTS - DRAWER ||============================== //

interface Props {
  handleDrawerOpen: () => void;
  open: boolean;
}

const Drawer = ({ handleDrawerOpen, open }: Props) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState();

  const handleSearchValue = (event: any) => {
    const search = event.target.value.trim().toLowerCase();
    setSearchValue(search);
  };

  return (
    <MuiDrawer
      sx={{
        width: DRAWER_WIDTH,
        height: '1514px'
      }}
      open={open}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      <MainCard sx={{ height: '100%' }} content={false}>
        <Box sx={{ p: 2, mb: 2 }}>
          <TextField
            fullWidth
            sx={{
              borderRadius: '4px',
              bgcolor: theme.palette.background.paper,
              boxShadow: theme.customShadows.primary,
              border: `1px solid ${theme.palette.primary.main}`
            }}
            InputProps={{
              startAdornment: <SearchOutlined />,
              placeholder: 'Search Components',
              type: 'search'
            }}
            onChange={handleSearchValue}
          />
        </Box>
        <DrawerContent searchValue={searchValue} />
      </MainCard>
    </MuiDrawer>
  );
};

export default Drawer;

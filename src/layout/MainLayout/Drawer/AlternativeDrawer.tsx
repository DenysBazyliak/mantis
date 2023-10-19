// material-ui
import { Paper, Box } from '@mui/material';

type AlternativeDrawerProps = {
  drawerOpen: boolean;
  children: React.ReactNode;
};

export const AlternativeDrawer = ({ drawerOpen, children }: AlternativeDrawerProps) => {
  return (
    <Paper
      sx={{
        height: '1550px',
        width: drawerOpen ? '260px' : '60px',
        flexShrink: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        '& .MuiDrawer-paper': {
          transition: 'width 225ms cubic-bezier(0.4, 0.0, 0.2, 1)'
        }
      }}
    >
      <Box component={'nav'} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {children}
      </Box>
    </Paper>
  );
};

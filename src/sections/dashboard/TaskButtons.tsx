// material-ui
import { Box, Button, Typography, Stack, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { useDispatch } from '../../store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Icon } from './Icon';

const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
      light: '#8c8c8c'
    },
    secondary: {
      main: '#1890ff',
      light: '#e6f7ff'
    },
    warning: {
      main: '#faad14',
      light: '#fff7e6'
    },
    success: {
      main: '#66cb34',
      light: '#f6ffed'
    }
  }
});
type isActive = 'Active' | 'Pending' | 'Completed';
type TaskTableProps = {
  isActive: isActive;
  setIsActive: ActionCreatorWithPayload<any, 'task/setIsActive'>;
};

type buttonArray = {
  name: isActive;
  color: string;
  mainColor: string;
  onFocusColor: string;
  backgroundColor: string;
  taskNumber: number;
};
const buttons: buttonArray[] = [
  {
    name: 'Active',
    color: theme.palette.primary.main,
    mainColor: theme.palette.secondary.main,
    onFocusColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    taskNumber: 6
  },
  {
    name: 'Pending',
    color: theme.palette.primary.main,
    mainColor: theme.palette.warning.main,
    onFocusColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.warning.light,
    taskNumber: 4
  },
  {
    name: 'Completed',
    color: theme.palette.primary.main,
    mainColor: theme.palette.success.main,
    onFocusColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.success.light,
    taskNumber: 5
  }
];

export const  TaskButtons = ({ isActive, setIsActive }: TaskTableProps) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      xs={12}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{ borderBottom: '1px solid', borderColor: '#f0f0f0', marginBottom: '10px' }}
    >
      <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
        <Stack display="flex" direction={'row'} justifyContent="space-between">
          {buttons.map((button) => (
            <Button
              key={button.name}
              onClick={() => dispatch(setIsActive(button.name))}
              sx={{
                color: isActive === button.name ? button.onFocusColor : button.color,
                borderRadius: '0',
                borderBottom: '2px solid',
                borderColor: isActive === button.name ? button.onFocusColor : 'transparent'
              }}
            >
              <Stack display={'flex'} direction={'row'} justifyContent={'space-evenly'}>
                <Typography>{button.name}</Typography>
                <Typography
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  variant={'subtitle2'}
                  sx={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '20px',
                    color: isActive === button.name ? theme.palette.secondary.main : button.mainColor,
                    backgroundColor: isActive === button.name ? theme.palette.secondary.light : button.backgroundColor,
                    marginLeft: '3px'
                  }}
                >
                  {button.taskNumber}
                </Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
        <Button>
          <Icon iconName={'outlineFilter'} rotate={false} iconSize={20} iconColor={'#262626'} />
        </Button>
      </Box>
    </Grid>
  );
};

//Hooks
import useAuth from '../../hooks/useAuth';
import { useSelector } from '../../store';
import { setIsActive } from '../../store/reducers/task';

//material-ui
import {
  Grid,
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Paper,
  InputLabel,
  FormControl,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

// utilities
import { getCurrentDate } from '../../utils/getTodaysDate';
import { Icon } from '../../sections/dashboard/Icon';

// project imports
import { DashboardPaperMain } from '../../sections/dashboard/DashboardPaperMain';
import { DashboardPaperButton } from '../../sections/dashboard/DashboardPaperButton';
import { DashboardNotificationList } from '../../sections/dashboard/DashboardNotificationList';
import { LabelledOverviewList } from '../../sections/dashboard/analytics/LabelledOverviewList';
import { TaskTable } from '../../sections/dashboard/TaskTable';
import { TaskButtons } from '../../sections/dashboard/TaskButtons';
import { PaperHeader } from '../../sections/dashboard/PaperHeader';
import { BillingList } from '../../sections/dashboard/BillingList';

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

const Dashboard = () => {
  const themeBreakpoint = useTheme();
  const { user } = useAuth();

  const drawerOpen = useSelector((state) => state.menu.drawerOpen);
  const isActive = useSelector((state) => state.task.isActive);

  const matchDownMD = useMediaQuery(themeBreakpoint.breakpoints.down('lg'));
  const matchDownSM = useMediaQuery(themeBreakpoint.breakpoints.down('md'));

  const formattedDate = getCurrentDate();

  return (
    <Grid container spacing={2} sx={{ width: '100%', maxHeight: 'fit-content', position: 'relative', zIndex: '3' }}>
      <Grid
        item
        container
        xs={12}
        lg={12}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          marginBottom: matchDownSM ? 2 : 0,
          height: 'fit-content'
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={4}
          lg={5}
          display={'flex'}
          direction={'column'}
          spacing={2}
          sx={{
            alignItems: matchDownSM ? 'center' : 'flex-start',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Typography variant={matchDownSM ? 'h2' : 'h3'}>Welcome, {user?.name}</Typography>
          <Typography variant={matchDownSM ? 'h4' : 'h5'}>{formattedDate}</Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={2}
          display={'flex'}
          sx={{
            padding: matchDownMD ? '16px' : '0px',
            alignItems: 'center',
            justifyContent: matchDownSM ? 'center' : 'flex-end'
          }}
        >
          <Button
            variant={'contained'}
            sx={{
              height: '40px',
              width: 'max-content'
            }}
          >
            + Create New Task / Project
          </Button>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Paper variant={'outlined'} sx={{ width: '100%' }}>
          <Grid
            sx={{ padding: '16px' }}
            item
            xs={12}
            display={'flex'}
            direction={matchDownSM ? 'column' : 'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant={'h4'}>Minutes Utilisation Overview</Typography>
            <FormControl sx={{ maxWidth: 'fit-content' }}>
              <InputLabel id="demo-simple-select-label">This Month</InputLabel>
              <Select
                sx={{ width: '122px', height: '40px' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={'This Month'}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <LabelledOverviewList />
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={12} md={8} lg={8} sx={{ height: '470px' }}>
        <Paper variant={'outlined'} sx={{ width: '100%' }}>
          <PaperHeader header={'Active Task Summary'} />
          <Grid item container display={'flex'} xs={12} direction={'column'} sx={{ padding: '16px' }}>
            <TaskButtons isActive={isActive} setIsActive={setIsActive} />
            <TaskTable userName={user?.name} drawerOpen={drawerOpen} isActive={isActive} matchDownMD={matchDownMD} />
          </Grid>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={12} md={4} lg={4}>
        <Paper variant={'outlined'} sx={{ width: '100%' }}>
          <PaperHeader header={'Business Manager'} />
          <DashboardPaperMain drawerOpen={drawerOpen} />
          <Grid item container xs={12} gap={'10px'} sx={{ padding: '16px' }}>
            <Grid item xs={12}>
              <DashboardPaperButton iconName={'callEnd'} rotate={true} text={'Schedule Call'} iconSize={14} iconColor={'#262626'} />
            </Grid>
            <Grid
              item
              container
              xs={12}
              display={'flex'}
              direction={'row'}
              gap={'10px'}
              justifyContent={'space-between'}
              sx={{ flexWrap: 'nowrap' }}
            >
              <DashboardPaperButton iconName={'outlineMessage'} rotate={false} text={'Message'} iconSize={14} iconColor={'#262626'} />
              <DashboardPaperButton iconName={'outlineMail'} rotate={false} text={'Email'} iconSize={14} iconColor={'#262626'} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={12} md={8} lg={8}>
        <Paper variant={'outlined'} sx={{ width: '100%' }}>
          <Grid sx={{ padding: '16px' }} item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant={'h4'}>Billing Summary</Typography>
            <Button sx={{ color: '#262626' }}>
              <Icon iconName={'dotsThreeVerticalBold'} rotate={false} iconSize={22} iconColor={'#262626'} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid sx={{ padding: '16px' }} item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack justifyContent={'space-between'} flexDirection={'row'}>
              <Grid
                item
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                  border: '1px solid',
                  borderColor: 'transparent',
                  borderRadius: '50%',
                  backgroundColor: '#e6f7ff',
                  width: '40px',
                  height: '40px'
                }}
              >
                <Icon iconName={'target'} rotate={false} iconSize={20} iconColor={'#1890ff'} />
              </Grid>
              <Grid item sx={{ width: drawerOpen ? 'fit-content' : '130px' }} display={'flex'} flexDirection={'column'}>
                <Typography variant={'subtitle2'}>Extended Subscription</Typography>
                <Typography variant={'body2'} sx={{ color: '#BCBCBC' }}>
                  600 minutes
                </Typography>
              </Grid>
            </Stack>
            <Grid
              item
              container
              sx={{ width: '80px' }}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Typography variant={'subtitle2'} justifySelf={'flex-end'}>
                $49.99 / mo
              </Typography>
              <Typography
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                variant={'subtitle2'}
                sx={{
                  borderRadius: '4px',
                  height: '20px',
                  color: theme.palette.success.main,
                  backgroundColor: theme.palette.success.light
                }}
              >
                <Typography variant={'subtitle2'} sx={{ width: '100%' }}>
                  Active
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid
            item
            container
            xs={12}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ padding: '12px 16px', width: '100%' }}
          >
            <Grid
              item
              container
              display={'flex'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{ width: '204px' }}
            >
              <Typography variant={'body2'} sx={{ color: '#a9a9a9' }}>
                Next renewal date:
              </Typography>
              <Typography variant={'body2'}> 26 October 2023</Typography>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'4px'}>
              <Icon iconName={'outlineCreditCard'} rotate={false} iconSize={12} iconColor={'#a9a9a9'} />
              <Typography variant={'body2'} sx={{ color: '#a9a9a9', marginRight: '4px' }}>
                Visa ending in
              </Typography>
              <Typography variant={'body2'} sx={{ color: '#a9a9a9', marginRight: '4px' }}>
                5432
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <BillingList matchDownMD={matchDownMD} />
          <Grid item xs={12} sx={{ padding: '16px' }}>
            <DashboardPaperButton
              iconName={'outlineMessage'}
              rotate={false}
              text={'More Information'}
              iconSize={14}
              iconColor={'#ffffff'}
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={12} md={4} lg={4}>
        <Paper variant={'outlined'} sx={{ width: '100%', height: '450px' }}>
          <PaperHeader header={'Notifications & Alerts Center'} />
          <DashboardNotificationList drawerOpen={drawerOpen} matchDownSM={matchDownSM} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

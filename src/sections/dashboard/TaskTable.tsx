import { Grid, Paper, Stack, Typography } from '@mui/material';
import Avatar from '../../components/@extended/Avatar';
import { useSelector } from '../../store';
import { isActive } from '../../types/task';
import { Icon } from './Icon';

type TaskTableProps = {
  userName: string | undefined;
  drawerOpen: boolean;
  isActive: isActive;
  matchDownMD: boolean;
};
export const TaskTable = ({ userName, drawerOpen, isActive, matchDownMD }: TaskTableProps) => {
  const tasks = useSelector((state) => state.task[isActive]);

  return (
    <Grid item container display={'flex'} xs={12} direction={'column'} gap={'12px'} sx={{ overflowX: 'auto', width: '100%' }}>
      {tasks.map((task) => (
        <Paper
          key={task.id}
          variant={'outlined'}
          sx={{
            width: matchDownMD ? '850px' : '100%',
            backgroundColor: '#fafafa',
            display: 'flex',
            flexWrap: 'no-wrap'
          }}
        >
          <Grid
            container
            xs={12}
            lg={12}
            sx={{ height: '68px', padding: '12px' }}
            display={'flex'}
            direction={'row'}
            gap={drawerOpen ? '16px' : '32px'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
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
                  backgroundColor: task.backgroundColor,
                  width: '40px',
                  height: '40px'
                }}
              >
                <Icon iconName={task.iconName} rotate={false} iconSize={20} iconColor={task.color} />
              </Grid>
              <Grid item container sx={{ width: drawerOpen ? '110px' : '130px' }} display={'flex'} flexDirection={'column'}>
                <Typography variant={'body2'} sx={{ color: '#BCBCBC' }}>
                  Task Name
                </Typography>
                <Typography variant={'subtitle2'}>{task.taskName}</Typography>
              </Grid>
            </Stack>

            <Grid item sx={{ width: drawerOpen ? '100px' : '130px' }}>
              <Typography variant={'body2'} sx={{ color: '#BCBCBC' }}>
                Assigned
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar alt="profile user" src={task.userImage} sx={{ width: '22px', height: '22px' }} />
                <Typography variant="subtitle2">{userName}</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '90px' }}>
              <Typography variant={'body2'} sx={{ color: '#BCBCBC' }}>
                Minutes Logged
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon iconName={'outlineFieldTime'} rotate={false} iconSize={12} iconColor={'#BCBCBC'} />
                <Typography variant="subtitle2">{task.loggedFor} min</Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ width: '100px', margin: '4px' }}>
              <Typography variant={'body2'} sx={{ color: '#BCBCBC' }}>
                Due Date
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon iconName={'outlineCalendar'} rotate={false} iconSize={12} iconColor={'#BCBCBC'} />
                <Typography variant="subtitle2">{task.date}</Typography>
              </Stack>
            </Grid>
            <Icon iconName={'dotsThreeVerticalBold'} rotate={false} iconSize={20} iconColor={'#BCBCBC'} />
          </Grid>
        </Paper>
      ))}
    </Grid>
  );
};

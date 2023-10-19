// material-ui
import { Grid, Paper, Typography } from '@mui/material';
import LinearWithLabel from '../../../components/@extended/progress/LinearWithLabel';
import { Icon } from '../Icon';

// project import

// ==============================|| LABELLED TASKS ||============================== //

export const LabelledOverviewList = () => {
  return (
    <Grid item container xs={12} sx={{ padding: '12px', width: '100%' }} display={'flex'} justifyContent={'space-around'} spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4} gap={3}>
        <Paper variant={'outlined'} sx={{ width: '100%', height: '226px' }}>
          <Grid item container xs={12} sx={{ padding: '12px' }}>
            <Grid item display={'flex'} alignItems={'flex-start'} sx={{ padding: '20px' }}>
              <Icon iconName={'outlineStar'} iconSize={20} iconColor={'#BCBCBC'} rotate={false} />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h3'}>600m</Typography>
              <LinearWithLabel value={100} color="primary" />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h5'}>Total Minutes Purcahsed</Typography>
              <Typography variant={'subtitle2'} sx={{ color: '#BCBCBC' }}>
                Overall Minutes from the subscription
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} gap={3}>
        <Paper variant={'outlined'} sx={{ width: '100%', height: '226px' }}>
          <Grid item container xs={12} sx={{ padding: '12px' }}>
            <Grid item display={'flex'} alignItems={'flex-start'} sx={{ padding: '20px' }}>
              <Icon iconName={'outlineFieldTime'} iconSize={20} iconColor={'#BCBCBC'} rotate={false} />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h3'}>344m</Typography>
              <LinearWithLabel value={55} color="success" />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h5'}>Minutes Used</Typography>
              <Typography variant={'subtitle2'} sx={{ color: '#BCBCBC' }}>
                Live tracker of the time utilised
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} gap={3}>
        <Paper variant={'outlined'} sx={{ width: '100%', height: '226px' }}>
          <Grid item container xs={12} sx={{ padding: '12px' }}>
            <Grid item display={'flex'} alignItems={'flex-start'} sx={{ padding: '20px' }}>
              <Icon iconName={'outlineClockCircle'} iconSize={20} iconColor={'#BCBCBC'} rotate={false} />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h3'}>246m</Typography>
              <LinearWithLabel value={45} color="error" />
            </Grid>
            <Grid item xs={12} sx={{ padding: '12px' }}>
              <Typography variant={'h5'}>Minutes Remaining</Typography>
              <Typography variant={'subtitle2'} sx={{ color: '#BCBCBC' }}>
                Leftover minutes for this month
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};


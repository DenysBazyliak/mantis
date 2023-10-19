// material-ui
import { Avatar, Grid, Typography } from '@mui/material';
// assets
import { BsDot } from 'react-icons/bs';

import { Icon } from 'sections/dashboard/Icon';

type DashboardPaperMainProps = {
  drawerOpen: boolean;
};

export const DashboardPaperMain = ({ drawerOpen }: DashboardPaperMainProps) => {
  return (
    <Grid item display={'flex'} alignItems={'center'} flexWrap={'wrap'} xs={12} sx={{ padding: '12px' }}>
      <Grid xs={4}>
        <Avatar
          alt={'Business Manager'}
          src={'/assets/images/blackMan.jpg'}
          sx={{ width: drawerOpen ? 80 : 100, height: drawerOpen ? 80 : 100, marginRight: '12px' }}
        />
      </Grid>
      <Grid item container xs={8}>
        <Typography variant={'h4'}>Andrew Willyams</Typography>
        <Grid item display={'flex'} justifyContent={'space-between'} sx={{ width: '230px' }}>
          <Grid item display={'flex'} direction="row" alignItems="center">
            <Icon iconName={'outlineClockCircle'} rotate={false} iconSize={12} iconColor={'#BDBDBD'} />
            <Typography variant="subtitle2" sx={{ color: '#BDBDBD' }}>
              13:53 local time
            </Typography>
          </Grid>
          <Grid item display={'flex'} direction="row" alignItems="center">
            <BsDot style={{ fontSize: '20px', color: '#52c41a' }} />
            <Typography variant="subtitle2">Active</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ marginTop: '12px' }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
        fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
        ornare leo, non suscipit magna.
      </Grid>
    </Grid>
  );
};

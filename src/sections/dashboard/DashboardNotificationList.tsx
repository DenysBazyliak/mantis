import { DashboardNotificationItem } from './DashboardNotificationItem';
import { Grid } from '@mui/material';

type DashboardNotificationListProps = {
  drawerOpen: boolean;
  matchDownSM: boolean;
};
export const DashboardNotificationList = ({ drawerOpen, matchDownSM }: DashboardNotificationListProps) => {
  return (
    <Grid item container display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{ padding: '16px' }}>
      <DashboardNotificationItem
        timeAgo="15 min"
        title="Minutes limitation warning"
        subtitle="You have left 30 min left today"
        iconName={'outlineClockCircle'}
        iconColor={'#FF4D4F'}
        iconSize={18}
        rotate={false}
        backgroundColor={'#FFF1F0'}
        drawerOpen={drawerOpen}
        matchDownSM ={matchDownSM}
      />
      <DashboardNotificationItem
        timeAgo="8 hrs"
        title="Task completed!"
        subtitle="Task #023 completed by Jhn Doe"
        iconName={'outlineDone'}
        iconColor={'#52c41a'}
        iconSize={18}
        rotate={false}
        backgroundColor={'#f6ffed'}
        drawerOpen={drawerOpen}
        matchDownSM ={matchDownSM}

      />
      <DashboardNotificationItem
        timeAgo="1 day"
        title="Task status changed"
        subtitle="Task #014 status changed to: In Production"
        iconName={'outlineEye'}
        iconColor={'#3b8eff'}
        iconSize={18}
        rotate={false}
        backgroundColor={'#e6f4ff'}
        drawerOpen={drawerOpen}
        matchDownSM ={matchDownSM}

      />
      <DashboardNotificationItem
        timeAgo="2 days"
        title="Warning Message"
        subtitle="Lorem ipsum dolor sit amet comme alis arum adipisci"
        iconName={'outlineWarning'}
        iconColor={'#faad14'}
        iconSize={18}
        rotate={false}
        backgroundColor={'#fffbe6'}
        drawerOpen={drawerOpen}
        matchDownSM ={matchDownSM}

      />
    </Grid>
  );
};

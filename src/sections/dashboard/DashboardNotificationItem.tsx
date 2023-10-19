// material-ui
import { Grid, Typography } from '@mui/material';

// utilities
import { Icon, Icons } from './Icon';

type NotificationItemProps = {
  timeAgo: string;
  title: string;
  subtitle: string;
  iconName: keyof Icons;
  iconColor: string;
  backgroundColor: string;
  rotate: boolean;
  iconSize: number;
  drawerOpen: boolean;
  matchDownSM: boolean;
};

export const DashboardNotificationItem = ({
  timeAgo,
  title,
  subtitle,
  iconName,
  iconColor,
  backgroundColor,
  rotate,
  iconSize,
  drawerOpen,
  matchDownSM
}: NotificationItemProps) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      container
      display={'flex'}
      gap={'10px'}
      flexWrap={'nowrap'}
      position={'relative'}
      alignSelf={'stretch'}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      sx={{ flex: '1 0 0', height: '88.5px' }}
    >
      <Grid
        item
        container
        display={'flex'}
        sm={1}
        md={2}
        alignItems={'flex-end'}
        sx={{ paddingTop: '20px', paddingBottom: '10px', height: '100%', width: '50px' }}
      >
        <Typography variant={'caption'} sx={{ color: '#bebebe', fontSize: '10px' }}>
          {timeAgo} ago
        </Typography>
      </Grid>
      <Grid display={'flex'} sm={2} md={2} justifyContent={'center'} alignItems={'flex-end'} sx={{ height: '100%' }}>
        <hr
          style={{
            border: ' 1px solid',
            position: 'absolute',
            height: '100%',
            zIndex: '1',
            bottom: '0',
            borderColor: '#ebebeb'
          }}
        />
        <Grid
          item
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            width: '38px',
            zIndex: '2',
            height: '38px',
            border: '1px solid',
            borderColor: 'transparent',
            backgroundColor: backgroundColor,
            borderRadius: '50%'
          }}
        >
          <Icon iconName={iconName} rotate={rotate} iconSize={iconSize} iconColor={iconColor} />
        </Grid>
      </Grid>
      <Grid
        item
        display={'flex'}
        sm={9}
        md={8}
        gap={'5px'}
        justifyContent={'flex-end'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        sx={{ paddingTop: '20px', height: '100%', width: matchDownSM ? '500px' : 'fit-content' }}
      >
        <Typography variant={'subtitle2'}>{title}</Typography>
        <Typography
          variant={'caption'}
          sx={{
            color: '#bebebe',
            fontSize: '10px',
            overflow: drawerOpen ? 'hidden' : 'visible',
            textOverflow: 'ellipsis'
          }}
        >
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

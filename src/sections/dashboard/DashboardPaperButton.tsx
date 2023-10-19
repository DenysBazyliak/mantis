// material-ui
import { Button, Stack, Typography } from '@mui/material';

// project import
import { Icon, Icons } from 'sections/dashboard/Icon';

// ==============================|| BUTTON ASSET - DASHBOARD ||============================== //

type DashboardPaperButtonProps = {
  rotate: boolean;
  iconName: keyof Icons;
  text: string;
  iconSize: number;
  iconColor: string;
};
export const DashboardPaperButton = ({ iconName, rotate, text, iconSize, iconColor }: DashboardPaperButtonProps) => {
  return (
    <Button
      sx={{
        padding: '16px',
        border: '1px solid',
        borderColor: '#e3e3e3',
        color: '#262626',
        width: '100%',
        height: '40px',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '#262626',
          color: '#262626'
        }
      }}
    >
      <Stack display={'flex'} direction={'row'} alignItems={'center'}>
        <Icon iconName={iconName} rotate={rotate} iconSize={iconSize} iconColor={iconColor} />
        <Typography variant={'subtitle2'} marginLeft={'8px'}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};

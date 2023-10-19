// material-ui
import { Button, CardMedia, Stack, Typography, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

//icons
import { StarOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard border={false} sx={{ m: 3 }}>
    <Stack alignItems="center" spacing={2.5} sx={{ padding: '20px, 16px, 30px, 16px' }}>
      <CardMedia component="img" sx={{ width: '124px', height: '83px' }} image={avatar} />
      <Stack alignItems="center" sx={{ width: '180px' }}>
        <Box>
          <Typography variant="subtitle1" align={'center'}>
            Have anything to say?
          </Typography>
          <Typography variant="subtitle2" align={'center'} color="secondary">
            Feel free to leave any feedback
            <br />
            or contact our support for help
          </Typography>
        </Box>
        <AnimateButton>
          <Button
            variant="contained"
            size="large"
            sx={{ width: '180px', height: '40px', margin: '4px' }}
            color={'primary'}
            startIcon={<StarOutlined />}
          >
            Leave Feedback
          </Button>
        </AnimateButton>
        <AnimateButton>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: '180px', height: '40px', margin: '4px', color: 'black', borderColor: 'black' }}
            color={'secondary'}
            startIcon={<QuestionCircleOutlined />}
          >
            Leave Feedback
          </Button>
        </AnimateButton>
      </Stack>
    </Stack>
  </MainCard>
);

export default NavCard;

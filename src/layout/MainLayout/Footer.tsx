// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, CardMedia, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import

// assets

import imgfootersoc1 from 'assets/images/landing/img-soc1.svg';
import imgfootersoc2 from 'assets/images/landing/img-soc2.svg';
import imgfootersoc3 from 'assets/images/landing/img-soc3.svg';

// types
import { ThemeMode } from 'types/config';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const Footer = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'text.primary' : 'background.paper';

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Grid
        container
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        gap={3}
        sx={{
          position: 'relative',
          bgcolor: theme.palette.grey.A700,
          zIndex: 4,
          px: 10,
          pt: { xs: 8, sm: 7.5, md: 18.75 },
          pb: { xs: 2.5, md: 10 },
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '80%',
            bottom: 0,
            left: 0
          }
        }}
      >
        <Grid item xs={5} sm={4} md={3} sx={{ width: '200px' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
              Artboard
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <FooterLink target="_blank" underline="none">
                Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do 5iusmod4tempor incididunt ut labore et dolore magna aliqua.
              </FooterLink>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={5} sm={4} md={3} sx={{ width: '150px' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <FooterLink target="_blank" underline="none">
                Home
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                Tasks / Projects
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                Minutes Utilisation
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                Billing & Subscription
              </FooterLink>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={5} sm={4} md={3} sx={{ width: '150px' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
              Help
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <FooterLink target="_blank" underline="none">
                Support Chat
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                Ticketing System
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                FAQ
              </FooterLink>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={5} sm={4} md={3} sx={{ width: '150px' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
              Legal
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
              <FooterLink target="_blank" underline="none">
                Terms of service
              </FooterLink>
              <FooterLink target="_blank" underline="none">
                Privacy policy
              </FooterLink>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: 'grey.700' }} />
      <Box
        sx={{
          py: 1.5,
          bgcolor: theme.palette.mode === ThemeMode.DARK ? theme.palette.grey[50] : theme.palette.grey[800]
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle2" color="secondary">
                © 2023 Artboard. All rights reserved. Legal information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc1} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc2} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc3} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

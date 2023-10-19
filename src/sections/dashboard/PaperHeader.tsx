import { Button, Divider, Grid, Typography } from '@mui/material';

type PaperHeaderProps = {
  header: string;
};
export const PaperHeader = ({ header }: PaperHeaderProps) => {
  return (
    <>
      <Grid sx={{ padding: '16px', height: '64px' }} item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h4'}>{header}</Typography>
        <Button sx={{ minWidth: 'fit-content' }}>View all</Button>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </>
  );
};

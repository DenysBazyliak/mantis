import { Grid, Typography } from '@mui/material';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { PaperFilterProps } from '../../types/filter';

export const PaperFilter = ({ header }: PaperFilterProps) => {
  return (
    <Grid item sx={{ height: '40px', width: 'fit-content' }}>
      <Typography variant={'body1'} sx={{ color: '#262626' }} display={'flex'} alignItems={'center'}>
        {header}
        <RiExpandUpDownFill style={{ fontSize: '12px', color: '#a9a9a9', marginLeft: '8px' }} />
      </Typography>
    </Grid>
  );
};

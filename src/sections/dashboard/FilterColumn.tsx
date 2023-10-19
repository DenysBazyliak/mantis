import { Grid, Typography } from '@mui/material';
import { PaperFilterProps } from '../../types/filter';
import { PaperFilter } from './PaperFilter';

type FilterColumnProps = PaperFilterProps & {
  main: string;
};
export const FilterColumn = ({ header, main }: FilterColumnProps) => {
  return (
    <Grid item sx={{ padding: '10px', minWidth:'fit-content' }}>
      <PaperFilter header={header} />
      <Typography variant={'body1'} sx={{ height: '40px', width: 'fit-content' }}>
        {main}
      </Typography>
      <Typography variant={'body1'} sx={{ height: '40px', width: 'fit-content' }}>
        {main}
      </Typography>
      <Typography variant={'body1'} sx={{ height: '40px', width: 'fit-content' }}>
        {main}
      </Typography>
      <Typography variant={'body1'} sx={{ height: '40px', width: 'fit-content' }}>
        {main}
      </Typography>
    </Grid>
  );
};

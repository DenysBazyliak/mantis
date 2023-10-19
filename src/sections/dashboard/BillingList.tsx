// material-ui
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { Icon } from './Icon';

type BillingListProps = {
  matchDownMD: boolean;
};

function createData(type: string, date: string, invoiceId: string, paid: string, billingMethod: number) {
  return { type, date, invoiceId, paid, billingMethod };
}

const rows = [
  createData('Subscription Renewal', '23 Sep 2023', 'RKTN83HD', '$49.99', 5432),
  createData('45 additional min', '18 sep 2023', 'KDL12KOD', '$4.99', 5432),
  createData('Subscription Renewal', '23 Aug 2023', 'DASKL1231', '$6.99', 5432),
  createData('30 additional min', '14 Sep 2023', 'KDL12KOD', '$3.99', 5432)
];
export const BillingList = ({ matchDownMD }: BillingListProps) => {
  return (
    <Grid sx={{ paddingBottom: '16px' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ padding: '16px' }}>
              <TableCell align="left">TRANSACTION TYPE</TableCell>
              <TableCell align="left">DATE</TableCell>
              <TableCell align="left">INVOICE ID</TableCell>
              <TableCell align="left">PAID</TableCell>
              <TableCell align="left">BILLING METHOD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.type} sx={{ '&:last-child td, &:last-child th': { border: 0 }, padding: '16px 8px' }}>
                <TableCell align="left" component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.invoiceId}</TableCell>
                <TableCell align="left">{row.paid}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    width: 'fit-content',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'flex-end',
                    gap: '4px'
                  }}
                >
                  <Icon iconName={'outlineCreditCard'} rotate={false} iconSize={12} iconColor={'#a9a9a9'} />
                  <Typography variant={'body2'} sx={{ color: '#a9a9a9', marginRight: '4px' }}>
                    Visa ending in
                  </Typography>
                  {row.billingMethod}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Grid>
  );
};

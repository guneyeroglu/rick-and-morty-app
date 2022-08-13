import { useState } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import LocationCardHeader from './LocationCardHeader';
import LocationCardBody from './LocationCardBody';
import Dialog from '../../Dialog/Dialog';

const LocationCard = (props) => {
  const [open, setOpen] = useState(false);
  const [informations, setInformations] = useState('');

  let digit = /\d+/;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (info) => {
    setOpen(true);

    let uri = '';

    for (let i of info) {
      uri += i.match(digit)[0] + ',';
    }

    setInformations(uri);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 750 }}>
        <Table stickyHeader aria-label='sticky table'>
          <LocationCardHeader {...props} />
          <LocationCardBody {...props} onOpen={handleOpen} />
        </Table>
      </TableContainer>
      <Dialog onClose={handleClose} open={open} informations={informations} />
    </Paper>
  );
};

export default LocationCard;

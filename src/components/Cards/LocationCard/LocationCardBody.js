import { TableBody, TableCell, TableRow } from '@mui/material';

import { useTranslation } from 'react-i18next';

const LocationCardBody = ({ data, onSortOrder, onOpen }) => {
  const locations = data;

  const { t } = useTranslation();

  return (
    <TableBody>
      {locations.sort(onSortOrder).map((location) => {
        const index = location.created.indexOf('T');
        const created = location.created.slice(0, index);
        return (
          <TableRow
            hover
            role='checkbox'
            tabIndex={-1}
            key={location.id}
            sx={{
              backgroundColor: '#3b3e43',
              ':hover': {
                backgroundColor: '#585e66 !important',
                cursor: 'default',
              },
            }}
          >
            <TableCell sx={{ color: '#fff', fontFamily: 'Roboto' }}>
              {location.name}
            </TableCell>
            <TableCell sx={{ color: '#fff', fontFamily: 'Roboto' }}>
              {location.type}
            </TableCell>
            <TableCell sx={{ color: '#fff', fontFamily: 'Roboto' }}>
              {location.dimension}
            </TableCell>
            <TableCell sx={{ color: '#fff', fontFamily: 'Roboto' }}>
              {created}
            </TableCell>
            <TableCell
              sx={{
                textDecoration: 'underline',
                opacity: '0.75',
                color: '#fff',
                fontFamily: 'Roboto',
                ':hover': {
                  textDecoration: 'none',
                  opacity: 1,
                  cursor: 'pointer',
                },
              }}
              onClick={() => onOpen(location.residents)}
            >
              {t('locationCharContent')}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default LocationCardBody;

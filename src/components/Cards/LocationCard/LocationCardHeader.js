import { useState } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

import Icon from '../../Icons/Icon';

import { useTranslation } from 'react-i18next';

import styles from './LocationCard.module.scss';

const LocationCardHeader = ({ onSort, onSortName }) => {
  const { t } = useTranslation();

  const columns = [
    { id: 1, label: t('locationName'), width: '20%', filter: 'name' },
    { id: 2, label: t('locationType'), width: '20%', filter: 'type' },
    { id: 3, label: t('locationDimension'), width: '20%', filter: 'dimension' },
    { id: 4, label: t('locationCreated'), width: '20%', filter: 'created' },
    { id: 5, label: t('locationAllChar'), width: '20%' },
  ];

  const [orderState, setOrderState] = useState({
    name: true,
    type: true,
    dimension: true,
    created: true,
  });

  const handleSortOrder = (column) => {
    if (column.id !== 5) {
      orderState[column.filter] ? onSort('a-z') : onSort('z-a');
      setOrderState({
        ...orderState,
        [column.filter]: !orderState[column.filter],
      });
      onSortName(column.filter);
    }
  };
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            style={{ width: column.width }}
            sx={{
              backgroundColor: '#1d1f25',
              color: 'white',
              fontFamily: 'Roboto',
            }}
            onClick={() => handleSortOrder(column)}
          >
            <div className={column.id !== 5 ? styles.table__row : ''}>
              {column.label}
              {column.id !== 5 && (
                <Icon
                  icon={
                    orderState[column.filter] ? 'UpArrowIcon' : 'DownArrowIcon'
                  }
                  fill='white'
                />
              )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default LocationCardHeader;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardTable from '../../components/Cards/CardTable/CardTable';
import Pagination from '../../components/Pagination/Pagination';

import useSortOrder from '../../hooks/useSortOrder';

import { useTranslation } from 'react-i18next';

import styles from './Locations.module.scss';

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortName, setSortName] = useState('name');

  const { t } = useTranslation();

  const { onSetSort, onSortOrder } = useSortOrder('default', sortName);

  const cells = [
    { id: 1, label: t('cellName'), width: '20%', filter: 'name' },
    { id: 2, label: t('cellType'), width: '20%', filter: 'type' },
    { id: 3, label: t('cellDimension'), width: '20%', filter: 'dimension' },
    { id: 4, label: t('cellCreated'), width: '20%', filter: 'created' },
    { id: 5, label: t('cellAllChar'), width: '20%', filter: 'residents' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${currentPage}`
      );

      setLocationData(response.data.results);
      setPageData(response.data.info.pages);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <CardTable
          data={{ results: locationData, cells: cells }}
          onSort={onSetSort}
          onSortOrder={onSortOrder}
          onSortName={setSortName}
        />
      </div>
      <Pagination
        pageData={pageData}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Locations;

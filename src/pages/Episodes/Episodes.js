import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TableCard from '../../components/Cards/TableCard/TableCard';
import Pagination from '../../components/Pagination/Pagination';

import useSortOrder from '../../hooks/useSortOrder';

import { useTranslation } from 'react-i18next';

import styles from './Episodes.module.scss';

const Episodes = () => {
  const [episodeData, setEpisodeData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortName, setSortName] = useState('name');

  const { t } = useTranslation();

  const { onSetSort, onSortOrder } = useSortOrder('default', sortName);

  const cells = [
    { id: 1, label: t('cellName'), width: '20%', filter: 'name' },
    { id: 2, label: t('cellAirDate'), width: '20%', filter: 'air_date' },
    { id: 3, label: t('cellEpisode'), width: '20%', filter: 'episode' },
    { id: 4, label: t('cellCreated'), width: '20%', filter: 'created' },
    { id: 5, label: t('cellAllChar'), width: '20%', filter: 'characters' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
      );

      setEpisodeData(response.data.results);
      setPageData(response.data.info.pages);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <TableCard
          data={{ results: episodeData, cells: cells }}
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

export default Episodes;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from '../../components/Cards/LocationCard/LocationCard';
import Pagination from '../../components/Pagination/Pagination';

import useSortOrder from '../../hooks/useSortOrder';

import styles from './Locations.module.scss';

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortName, setSortName] = useState('name');

  const { onSetSort, onSortOrder } = useSortOrder('default', sortName);

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
        <LocationCard
          data={locationData}
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

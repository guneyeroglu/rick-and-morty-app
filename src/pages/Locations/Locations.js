import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from '../../components/Cards/LocationCard/LocationCard';
import Pagination from '../../components/Pagination/Pagination';

import styles from './Locations.module.scss';

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
        {locationData &&
          locationData.map((location) => (
            <LocationCard data={location} key={location.id} />
          ))}
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

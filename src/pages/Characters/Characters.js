import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useSortOrder from '../../hooks/useSortOrder';

import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder';
import Pagination from '@mui/material/Pagination';

import styles from './Characters.module.scss';

const Characters = (props) => {
  const [charData, setCharData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      setCharData(response.data.results);
      setPageData(response.data.info.pages);
    };

    fetchData();
  }, [currentPage]);

  const { sort, onSetSort, onSortOrder } = useSortOrder('default');

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        <div className={styles.search}>
          <Search value={props.value} onSetValue={props.onSetValue} />
        </div>
        <SortOrder sort={sort} onSort={onSetSort} />
      </div>
      <div className={styles.container__main}>
        {charData &&
          charData
            .filter((char) =>
              char.name.toLowerCase().includes(props.value.toLowerCase())
            )
            .sort(onSortOrder)
            .map((char) => <Card data={char} key={char.id} />)}
      </div>
      <div className={styles.container__pagination}>
        <Pagination
          count={pageData}
          shape='rounded'
          page={currentPage}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Characters;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useSortOrder from '../../hooks/useSortOrder';

import CharCard from '../../components/Cards/CharCard/CharCard';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder';
import Pagination from '../../components/Pagination/Pagination';

import styles from './Characters.module.scss';

const Characters = (props) => {
  const [charData, setCharData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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

  const { sort, onSetSort, onSortOrder } = useSortOrder('default', 'name');

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
            .map((char) => <CharCard data={char} key={char.id} />)}
      </div>
      <Pagination
        pageData={pageData}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Characters;

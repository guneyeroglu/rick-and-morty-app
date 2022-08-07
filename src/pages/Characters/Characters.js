import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '@mui/material/Pagination';

import Icon from '../../components/Icons/Icon';
import Search from '../../components/Search/Search';

import like from '../../assets/images/like.png';
import unlike from '../../assets/images/unlike.png';

import { useTranslation } from 'react-i18next';

import styles from './Characters.module.scss';

const Characters = (props) => {
  const { t } = useTranslation();

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

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        <div className={styles.search}>
          <Search value={props.value} onSearch={props.onSearch} />
        </div>
        <div className={styles.sort}>
          <span>{t('sortText')}</span>
          <Icon icon={'SortIcon'} fill='#3b3e43' />
        </div>
      </div>
      <div className={styles.container__main}>
        {charData &&
          charData
            .filter((char) =>
              char.name.toLowerCase().includes(props.value.toLowerCase())
            )
            .map((char) => (
              <div className={styles.card} key={char.id}>
                <div className={styles.card__item}>
                  <div className={styles.photo}>
                    <img src={char.image} alt={char.name} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.content__head}>
                      <div className={styles.title}>
                        <span>{char.name}</span>
                      </div>
                      <div className={styles.info}>
                        <div className={styles.info__status}>
                          <span
                            className={styles.dot}
                            style={{
                              backgroundColor:
                                char.status === 'Alive'
                                  ? 'green'
                                  : char.status === 'Dead'
                                  ? 'red'
                                  : '#9f9f9f',
                            }}
                          ></span>
                          <span>{char.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content__body}>
                      <span>{char.species}</span>
                      <span> - {char.gender}</span>
                    </div>
                    <div className={styles.content__foot}>
                      <div className={styles.title}>
                        <span>{t('charLastLocation')}</span>
                      </div>
                      <div className={styles.info}>
                        <span>{char.location.name}</span>
                      </div>
                    </div>

                    <div className={styles.content__favorite}>
                      <img src={unlike} alt='123' width={30} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

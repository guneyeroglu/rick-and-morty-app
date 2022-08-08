import { useContext } from 'react';
import DataContext from '../../store/Context/ContextFav';

import { useTranslation } from 'react-i18next';

import like from '../../assets/images/like.png';

import styles from './Card.module.scss';

const Card = ({ data }) => {
  const char = data;

  const { favChar, onFavChar } = useContext(DataContext);

  const { t } = useTranslation();

  return (
    <div className={styles.card}>
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
          <div
            className={styles.content__favorite}
            onClick={() => onFavChar(char)}
            style={{
              display: favChar
                .filter((item) => item.id === char.id)
                .map((status) => status.fav)[0]
                ? 'flex'
                : 'none',
            }}
          >
            <img
              src={like}
              alt='like-button'
              style={{
                filter: favChar
                  .filter((item) => item.id === char.id)
                  .map((status) => status.fav)[0]
                  ? 'grayscale(0)'
                  : 'grayscale(0.75)',
                opacity: favChar
                  .filter((item) => item.id === char.id)
                  .map((status) => status.fav)[0]
                  ? '1'
                  : '0.75',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

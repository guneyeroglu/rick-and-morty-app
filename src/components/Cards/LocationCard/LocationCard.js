import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './LocationCard.module.scss';

const LocationCard = ({ data }) => {
  const location = data;
  const { t } = useTranslation();

  const index = location.created.indexOf('T');
  const created = location.created.slice(0, index);

  return (
    <div className={styles.card}>
      <div className={styles.card__item}>
        <div className={styles.content}>
          <div className={styles.content__name}>
            <span>
              {t('locationName')}: {location.name}
            </span>
          </div>
          <div className={styles.content__type}>
            <span>
              {t('locationType')}: {location.type}
            </span>
          </div>
          <div className={styles.content__info}>
            <span>
              {t('locationDimension')}: {location.dimension}
            </span>
          </div>
          <div className={styles.content__info}>
            <span>
              {t('locationCreated')}: {created}
            </span>
          </div>
        </div>
        <div className={styles.chars}>
          <span>{t('locationAllChar')}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

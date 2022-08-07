import { useContext } from 'react';
import DataContext from '../../store/Context/ContextFav';

import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder';

import styles from './FavoriteChar.module.scss';

const FavoriteChar = (props) => {
  const { favChar } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        <div className={styles.search}>
          <Search
            value={props.value}
            setValue={props.setValue}
            onSearch={props.onSearch}
          />
        </div>
        <SortOrder />
      </div>
      <div className={styles.container__main}>
        {favChar
          .filter((char) =>
            char.name.toLowerCase().includes(props.value.toLowerCase())
          )
          .map((char) => (
            <Card data={char} key={char.id} />
          ))}
      </div>
    </div>
  );
};

export default FavoriteChar;

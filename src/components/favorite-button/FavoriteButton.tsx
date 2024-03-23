import { TProductInfo } from '@/product-data-source/interfaces';

import styles from './styles.module.scss';
import { useState } from 'react';

export const FavoriteButton = ({ isFavorite }: Pick<TProductInfo, 'isFavorite'>) => {
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const handleClick = () => {
    setIsFavoriteStatus((prevState) => !prevState);
  };

  return <button onClick={handleClick} className={`${styles['favorite-button']} ${isFavoriteStatus && styles.favorite}`} type="button"></button>;
};

import { TProductInfo } from '@/product-data-source/interfaces';

import styles from './styles.module.scss';

export const FavoriteButton = ({ isFavorite }: Pick<TProductInfo, 'isFavorite'>) => {
  return <button className={`${styles['favorite-button']} ${isFavorite && styles.favorite}`} type="button"></button>;
};

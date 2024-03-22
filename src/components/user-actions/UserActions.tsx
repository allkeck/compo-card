import { TProductInfo } from '@/product-data-source/interfaces';

import { BasketButton } from '../basket-button/BasketButton';
import { FavoriteButton } from '../favorite-button/FavoriteButton';

import styles from './styles.module.scss';

interface IUserActionsProps {
  isFavorite: TProductInfo['isFavorite'];
  maxProductCount: number;
}

export const UserActions = ({ isFavorite, maxProductCount }: IUserActionsProps) => {
  return (
    <div className={styles['user-actions__wrapper']}>
      <BasketButton maxProductCount={maxProductCount} />
      <FavoriteButton isFavorite={isFavorite} />
    </div>
  );
};

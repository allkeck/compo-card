import { BasketButton } from '../basket-button/BasketButton';
import { FavoriteButton } from '../favorite-button/FavoriteButton';

import styles from './styles.module.scss';

export const UserActions = () => {
  return (
    <div className={styles['user-actions__wrapper']}>
      <BasketButton />
      <FavoriteButton />
    </div>
  );
};

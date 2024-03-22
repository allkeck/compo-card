import { TProductInfo } from '@/product-data-source/interfaces';

import styles from './styles.module.scss';

interface IProductAvailabilityProps {
  nearestDeliveryDay: string;
  pickUpPoints: TProductInfo['productAvailability']['pickUpPoints'];
}

export const ProductAvailability = ({ nearestDeliveryDay, pickUpPoints }: IProductAvailabilityProps) => {
  return (
    <div className={styles['product-availability__wrapper']}>
      <div className={styles['product-availability__item']}>
        <span className={styles['item-value']}>{nearestDeliveryDay}</span>
        <span className={styles['item-type']}>Доставка</span>
      </div>

      {pickUpPoints.map(({ id, name, availableProductCount }) => (
        <div key={id} className={styles['product-availability__item']}>
          <span className={styles['item-value']}>{`${availableProductCount} шт.`}</span>
          <span className={styles['item-type']}>{name}</span>
        </div>
      ))}
    </div>
  );
};

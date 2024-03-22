import { TProductInfo } from '@/product-data-source/interfaces';
import { ProductAvailabilityService } from '@/services/product-availability-service/ProductAvailabilityService';

import styles from './styles.module.scss';

export const ProductAvailability = ({ productAvailability }: Pick<TProductInfo, 'productAvailability'>) => {
  const deliveryDay = ProductAvailabilityService.convertDeliveryDate(productAvailability.nearestDeliveryDate);

  return (
    <div className={styles['product-availability__wrapper']}>
      <div className={styles['product-availability__item']}>
        <span className={styles['item-value']}>{deliveryDay}</span>
        <span className={styles['item-type']}>Доставка</span>
      </div>

      {productAvailability.pickUpPoints.map(({ id, name, availableProductCount }) => (
        <div key={id} className={styles['product-availability__item']}>
          <span className={styles['item-value']}>{`${availableProductCount} шт.`}</span>
          <span className={styles['item-type']}>{name}</span>
        </div>
      ))}
    </div>
  );
};

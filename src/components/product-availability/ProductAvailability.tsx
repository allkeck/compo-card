import ProductAvailabilityService from '@/services/product-availability-service/ProductAvailabilityService';

import styles from './styles.module.scss';

export const ProductAvailability = () => {
  const nearestDeliveryDay = ProductAvailabilityService.getNearestDeliveryDate();
  const pickUpPoints = ProductAvailabilityService.getpickUpPoints();

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

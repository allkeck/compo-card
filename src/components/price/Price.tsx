import { useContext, useEffect, useState } from 'react';

import { FullBoxContext } from '@/context/FullBoxProvider';
import PriceService from '@/services/price-service/PriceService';

import { DiscountLabel } from '../discount-label/DiscountLabel';

import styles from './styles.module.scss';

export const Price = () => {
  const [discointPrice, setDiscountPrice] = useState<string>();
  const [fullPrice, setFullPrice] = useState<string>();

  const { isFullBox } = useContext(FullBoxContext);

  const hasDiscount = PriceService.hasDiscount;

  useEffect(() => {
    setDiscountPrice(
      PriceService.getPrice(isFullBox, true).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })
    );
    setFullPrice(
      PriceService.getPrice(isFullBox, false).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [isFullBox]);

  return (
    <div className={`${styles['price-wrapper']} ${hasDiscount && styles['grid']}`}>
      {hasDiscount && <span className={styles['full-price']}>{`${fullPrice} цена без скидки`}</span>}

      <strong className={styles.price}>{discointPrice}</strong>

      {hasDiscount && <DiscountLabel discountAmount={PriceService.convertDiscountAmount()} />}
    </div>
  );
};

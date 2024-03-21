import { useContext, useEffect, useState } from 'react';

import { CountContext } from '@/context/CountContext';
import PriceService from '@/services/price-service/PriceService';

import { DiscountLabel } from '../discount-label/DiscountLabel';

import styles from './styles.module.scss';

export const Price = () => {
  const [price, setPrice] = useState<string>();
  const [fullPrice, setFullPrice] = useState<string>();
  const { count } = useContext(CountContext);

  const hasDiscount = PriceService.hasDiscount;

  useEffect(() => {
    setPrice(PriceService.getCurrentPrice().toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }));
    setFullPrice(
      PriceService.getFullPrice().toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [count]);

  return (
    <div className={`${styles['price-wrapper']} ${hasDiscount && styles['grid']}`}>
      {hasDiscount && <span className={styles['full-price']}>{`${fullPrice} цена без скидки`}</span>}

      <strong className={styles.price}>{price}</strong>

      {hasDiscount && <DiscountLabel discountAmount={PriceService.modifyDiscountAmount()} />}
    </div>
  );
};

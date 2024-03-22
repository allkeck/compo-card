import { useContext, useEffect, useState } from 'react';

import { TProductInfo } from '@/product-data-source/interfaces';

import { FullBoxContext } from '@/context/FullBoxProvider';
import { PriceService } from '@/services/price-service/PriceService';

import { DiscountLabel } from '../discount-label/DiscountLabel';

import styles from './styles.module.scss';

export const Price = ({ price }: Pick<TProductInfo, 'price'>) => {
  const [discointPrice, setDiscountPrice] = useState<string>();
  const [fullPrice, setFullPrice] = useState<string>();

  const { isFullBox } = useContext(FullBoxContext);

  const hasDiscount = price.discount.hasDiscount;

  useEffect(() => {
    setDiscountPrice(
      PriceService.getPrice(price, isFullBox, true).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })
    );
    setFullPrice(
      PriceService.getPrice(price, isFullBox, false).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [isFullBox]);

  return (
    <div className={`${styles['price-wrapper']} ${hasDiscount && styles['grid']}`}>
      {hasDiscount && <span className={styles['full-price']}>{`${fullPrice} цена без скидки`}</span>}

      <strong className={styles.price}>{discointPrice}</strong>

      {hasDiscount && <DiscountLabel discountAmount={PriceService.convertDiscountAmount(price.discount)} />}
    </div>
  );
};

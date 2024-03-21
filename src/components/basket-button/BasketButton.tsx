import { useEffect, useState } from 'react';

import { PrimaryButton } from '../primary-button/PrimaryButton';
import { AddingButton } from '../adding-button/AddingButton';
import CountService from '@/services/count-service/CountService';

export const BasketButton = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [productsCount, setProductsCount] = useState<number>(0);

  const handleClick = () => {
    setProductsCount(CountService.increaseCount().getCount());
    setIsAddingProduct(true);
  };

  const increaseProductCount = () => {
    setProductsCount(CountService.increaseCount().getCount());
  };

  const decreaseProductCount = () => {
    setProductsCount(CountService.decreaseCount().getCount());
  };

  useEffect(() => {
    if (productsCount < 1) {
      setIsAddingProduct(false);
    }
  }, [productsCount]);

  return (
    <>
      {isAddingProduct ? (
        <AddingButton increaseAction={increaseProductCount} decreaseAction={decreaseProductCount} productsCount={productsCount} />
      ) : (
        <PrimaryButton onClickAction={handleClick}>
          <span>В&nbsp;корзину</span>
        </PrimaryButton>
      )}
    </>
  );
};

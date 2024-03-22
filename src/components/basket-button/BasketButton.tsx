import { useContext, useEffect, useState } from 'react';

import CountService from '@/services/count-service/CountService';
import { FullBoxContext } from '@/context/FullBoxProvider';

import { PrimaryButton } from '../primary-button/PrimaryButton';
import { CountButton } from '../count-button/CountButton';

export const BasketButton = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [productsCount, setProductsCount] = useState<number>(0);

  const { isFullBox } = useContext(FullBoxContext);

  const handleClick = () => {
    setProductsCount(CountService.increaseCount(isFullBox).getCount());
    setIsAddingProduct(true);
  };

  const increaseProductCount = () => {
    setProductsCount(CountService.increaseCount(isFullBox).getCount());
  };

  const decreaseProductCount = () => {
    setProductsCount(CountService.decreaseCount(isFullBox).getCount());
  };

  useEffect(() => {
    if (productsCount < 1) {
      setIsAddingProduct(false);
      setProductsCount(CountService.setCount(0).getCount());
    }
  }, [productsCount]);

  return (
    <>
      {isAddingProduct ? (
        <CountButton increaseAction={increaseProductCount} decreaseAction={decreaseProductCount} productsCount={productsCount} />
      ) : (
        <PrimaryButton onClickAction={handleClick}>
          <span>В&nbsp;корзину</span>
        </PrimaryButton>
      )}
    </>
  );
};

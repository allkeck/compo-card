import { useContext, useEffect, useState } from 'react';

import { FullBoxContext } from '@/context/FullBoxProvider';

import { PrimaryButton } from '../primary-button/PrimaryButton';
import { CountButton } from '../count-button/CountButton';

import styles from './styles.module.scss';

export const BasketButton = ({ maxProductCount }: { maxProductCount: number }) => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isMaxCount, setIsMaxCount] = useState(false);
  const [countErrorMessage, setCountErrorMessage] = useState('');
  const [productsCount, setProductsCount] = useState<number>(0);
  const [isToastVisible, setToastVisible] = useState(false);

  const { isFullBox } = useContext(FullBoxContext);

  const handleClick = () => {
    setIsAddingProduct(true);
    setProductsCount(isFullBox ? 12 : 1);
  };

  const increaseProductCount = () => {
    setProductsCount((prevCount) => {
      const newCount = isFullBox ? (prevCount += 12) : (prevCount += 1);

      if (newCount > maxProductCount) {
        setToastVisible(true);

        return maxProductCount;
      }

      return newCount;
    });
  };

  const decreaseProductCount = () => {
    setProductsCount((prevCount) => {
      return isFullBox ? (prevCount -= 12) : (prevCount -= 1);
    });
  };

  useEffect(() => {
    if (productsCount < 1) {
      setIsAddingProduct(false);
      setProductsCount(0);
    }

    if (productsCount === maxProductCount) {
      setIsMaxCount(true);
      setCountErrorMessage('Добавлено максимальное количество');
    } else {
      setIsMaxCount(false);
      setCountErrorMessage('');
    }
  }, [productsCount]);

  return (
    <>
      {isAddingProduct ? (
        <CountButton
          increaseAction={increaseProductCount}
          decreaseAction={decreaseProductCount}
          productsCount={productsCount}
          isMaxCount={isMaxCount}
          countErrorMessage={countErrorMessage}
          isToastVisible={isToastVisible}
          toastClose={() => setToastVisible(false)}
        />
      ) : (
        <PrimaryButton onClickAction={handleClick} isDisabled={maxProductCount === 0}>
          <span className={styles['basket-button__text']}>В&nbsp;корзину</span>
        </PrimaryButton>
      )}
    </>
  );
};

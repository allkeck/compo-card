import { useContext, useState } from 'react';

import { FullBoxContext } from '@/context/FullBoxProvider';

import { Hug } from '../hug/Hug';

import styles from './styles.module.scss';

export const FullBoxPrice = () => {
  const [isFullBox, setIsFullBox] = useState(false);

  const { setIsFullBoxStatus } = useContext(FullBoxContext);

  const setFullBoxHandler = () => {
    setIsFullBox((prev) => {
      setIsFullBoxStatus(!prev);

      return !prev;
    });
  };

  return (
    <div className={styles['count-wrapper']}>
      <span className={styles.count}>12 штук в уп.</span>
      <button className={styles['full-box-button']} onClick={setFullBoxHandler}>
        <Hug isActive={isFullBox} />
        Заказ упаковкой
      </button>
    </div>
  );
};

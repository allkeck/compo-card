import { useContext, useState } from 'react';

import { CountContext } from '@/context/CountContext';
import CountService from '@/services/count-service/CountService';

import styles from './styles.module.scss';
import { Hug } from '../hug/Hug';

export const Count = () => {
  const [isFullBox, setIsFullBox] = useState(false);

  const { setCount } = useContext(CountContext);

  const setFullBoxHandler = () => {
    setIsFullBox((prev) => {
      prev ? setCount(CountService.setCount(1).getCount()) : setCount(CountService.setFullBoxCount().getCount());

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

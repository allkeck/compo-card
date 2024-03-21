import { useContext } from 'react';

import { CountContext } from '@/context/CountContext';
import CountService from '@/services/count-service/CountService';

export const Count = () => {
  const { count, setCount } = useContext(CountContext);

  const setFullBoxHandler = () => {
    setCount(CountService.setFullBoxCount().getCount());
  };

  return (
    <div>
      <span>12 штук в уп.</span>
      <button onClick={setFullBoxHandler}>Заказ упаковкой</button>
      {count}
    </div>
  );
};

import { createContext, PropsWithChildren, useState } from 'react';

import CountService from '@/services/count-service/CountService';

interface ICountContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CountContext = createContext<ICountContext>({} as ICountContext);

export const CountContextProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState<number>(CountService.getCount());

  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
};

import { createContext, PropsWithChildren, useState } from 'react';

interface IFullBox {
  isFullBox: boolean;
  setIsFullBoxStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FullBoxContext = createContext<IFullBox>({} as IFullBox);

export const FullBoxProvider = ({ children }: PropsWithChildren) => {
  const [isFullBox, setIsFullBoxStatus] = useState<boolean>(false);

  return <FullBoxContext.Provider value={{ isFullBox, setIsFullBoxStatus }}>{children}</FullBoxContext.Provider>;
};

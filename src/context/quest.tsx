import { ReactNode, createContext, useState } from 'react';

interface questInterface {
  index: Number;
}
interface childrenProps {
  children: ReactNode;
}

const defaultValue = {
  active: 0,
  setActive: (state: number) => {},
};

export const QuestContext = createContext(defaultValue);

const QuestContextProvider = ({ children }: childrenProps) => {
  const [active, setActive] = useState<number>(0);
  return (
    <QuestContext.Provider value={{ active, setActive }}>
      {children}
    </QuestContext.Provider>
  );
};

export default QuestContextProvider;

'use client';
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

interface childrenProps {
  children: ReactNode;
}

const defaultValue = {
  CFUser: {} || null,
};
interface UserContextType {
  CFUser: Object | null;
  setCFUser: (user: Object | null) => void;
}
export const QuestContext = createContext<
  UserContextType | undefined
>(undefined);

const QuestContextProvider = ({ children }: childrenProps) => {
  const [CFUser, setCFUser] = useState<Object | null>(null);
  return (
    <QuestContext.Provider value={{ CFUser, setCFUser }}>
      {children}
    </QuestContext.Provider>
  );
};
export const useCFuser = () => {
  const context = useContext(QuestContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
export default QuestContextProvider;

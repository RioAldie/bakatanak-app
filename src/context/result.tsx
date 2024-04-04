'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type ConsultTypes = {
  data: Object;
  handleSetData: () => void;
};

const consultContextDefaultValues: ConsultTypes = {
  data: {},
  handleSetData: () => {},
};

export const ConsultContext = createContext<ConsultTypes>(
  consultContextDefaultValues
);

export function useConsult() {
  const context = useContext(ConsultContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

export const ConsultProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Object | null>({});

  const handleSetData = (value: Object) => {
    setData(value);
  };
  const value = {
    data,
    handleSetData,
  };
  return (
    <ConsultContext.Provider value={value as ConsultTypes}>
      {children}
    </ConsultContext.Provider>
  );
};

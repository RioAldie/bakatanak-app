'use client';
import React, { createContext, useContext, ReactNode } from 'react';

// Define the type for your context
interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
}

// Create the context with an initial value
const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// Create a provider component to wrap your app with
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for using the context
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [rank, setRank] = useState('');
  const [boosters, setBoosters] = useState([]);

  return (
    <AppContext.Provider value={{ balance, setBalance, rank, setRank, boosters, setBoosters }}>
      {children}
    </AppContext.Provider>
  );
};
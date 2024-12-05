'use client';

import React, { createContext, useContext, useState } from 'react';
import { CompanyData } from '../interfaces';

interface MainContextType {
  queryName: string;
  setQueryName: (value: string) => void;

  queryYear: number;
  setQueryYear: (value: number) => void;

  loadedCompany: CompanyData | undefined;
  setLoadedCompany: (value: CompanyData | undefined) => void;
}

const MainContext = createContext<MainContextType>({
  queryName: '',
  setQueryName: () => {},

  queryYear: 2024,
  setQueryYear: () => {},

  loadedCompany: undefined,
  setLoadedCompany: () => {},
});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryName, setQueryName] = useState<string>('');
  const [queryYear, setQueryYear] = useState<number>(2024);
  const [loadedCompany, setLoadedCompany] = useState<CompanyData | undefined>(
    undefined,
  );

  return (
    <MainContext.Provider
      value={{
        queryName,
        setQueryName,

        queryYear,
        setQueryYear,

        loadedCompany,
        setLoadedCompany,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
const useMainContext = (): MainContextType => useContext(MainContext);

export { MainProvider, useMainContext };

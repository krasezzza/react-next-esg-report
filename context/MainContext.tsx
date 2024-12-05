'use client';

import React, { createContext, useContext, useState } from 'react';
import { CompanyData } from '../interfaces';

interface MainContextType {
  querySearch: string;
  setQuerySearch: (value: string) => void;

  selectedYear: number;
  setSelectedYear: (value: number) => void;

  loadedCompany: CompanyData | undefined;
  setLoadedCompany: (value: CompanyData | undefined) => void;

  fetchResult: (
    query: string,
    controller: AbortController,
  ) => Promise<CompanyData | undefined>;
}

const MainContext = createContext<MainContextType>({
  querySearch: '',
  setQuerySearch: () => {},

  selectedYear: 2024,
  setSelectedYear: () => {},

  loadedCompany: undefined,
  setLoadedCompany: () => {},

  fetchResult: (
    query: string,
    controller: AbortController,
  ): Promise<CompanyData | undefined> => Promise.resolve(undefined),
});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [querySearch, setQuerySearch] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [loadedCompany, setLoadedCompany] = useState<CompanyData | undefined>(
    undefined,
  );

  const fetchResult = async (
    query: string,
    controller: AbortController,
  ): Promise<CompanyData | undefined> => {
    try {
      const signal = controller.signal;

      return new Promise((resolve, reject) => {
        if (signal.aborted) {
          reject(new Error('Request aborted'));
        } else {
          fetch('/esg-data.json')
            .then((response) => response.json())
            .then((esgData) => {
              const company = esgData.find((companyData: CompanyData) => {
                if (
                  companyData.companyname.toLowerCase() ===
                    querySearch.toLowerCase() &&
                  companyData['Year'] === selectedYear
                ) {
                  console.log('companyData', companyData);

                  return companyData;
                } else {
                  console.log('companyData', undefined);

                  return undefined;
                }
              });
              resolve(company);
            })
            .catch((error) => console.error('Error fetching data:', error));
        }
      });
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request aborted:', query);
      }
    }
  };

  return (
    <MainContext.Provider
      value={{
        querySearch,
        setQuerySearch,

        selectedYear,
        setSelectedYear,

        loadedCompany,
        setLoadedCompany,

        fetchResult,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
const useMainContext = (): MainContextType => useContext(MainContext);

export { MainProvider, useMainContext };

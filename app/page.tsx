'use client';

import { fetchResult } from '@/api';
import CompanyInfo from '@/components/report/CompanyInfo';
import CompanySearch from '@/components/report/CompanySearch';
import CompanyTitle from '@/components/report/CompanyTitle';
import EsgGeneralScores from '@/components/report/EsgGeneralScores';
import EsgPillarScores from '@/components/report/EsgPillarScores';
import PeriodSelector from '@/components/report/PeriodSelector';
import { useMainContext } from '@/context/MainContext';
import { SearchQuery } from '@/interfaces';
import { useEffect } from 'react';

export default function Home() {
  const { queryName, queryYear, loadedCompany, setLoadedCompany } =
    useMainContext();

  useEffect(() => {
    if (queryName) {
      const searchQuery: SearchQuery = {
        name: queryName,
        year: queryYear,
      };

      fetchResult(searchQuery)
        .then((res) => setLoadedCompany(res))
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.error('Error fetching results:', err);
          }
        });
    }
  }, [queryName, queryYear]);

  return (
    <div className="grid grid-rows-[60px_auto] p-[24px] text-sm">
      <CompanySearch />

      {!loadedCompany ? (
        <div className="flex items-center justify-center h-[360px] gap-[24px]">
          <span className="text-lg">
            ESG report will be generated after selecting a company
          </span>
        </div>
      ) : (
        <div className="grid grid-rows-[50px_155px_360px_25px] px-[12px]">
          <div className="flex items-start justify-between">
            <CompanyTitle data={loadedCompany} />
            <PeriodSelector data={loadedCompany} />
          </div>

          <div className="flex items-start justify-center gap-x-[90px]">
            <CompanyInfo data={loadedCompany} />
            <EsgGeneralScores data={loadedCompany} />
          </div>

          <div>
            <EsgPillarScores data={loadedCompany} />
          </div>

          <div className="pt-[12px] flex justify-end text-xs">
            {`Data fetched: ${loadedCompany['Latest Score Date']}`}
          </div>
        </div>
      )}
    </div>
  );
}

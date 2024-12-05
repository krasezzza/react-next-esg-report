'use client';

import { YEARS } from '@/constants';
import { useMainContext } from '@/context/MainContext';
import { CompanyData } from '@/interfaces';
import { useRef } from 'react';

export default function PeriodSelector({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const {
    selectedYear,
    setSelectedYear,
    querySearch,
    setLoadedCompany,
    fetchResult,
  } = useMainContext();
  const controllerRef = useRef<AbortController | null>(null);

  const handleChanged = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(evt.target.value));

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const newController = new AbortController();
    controllerRef.current = newController;

    if (querySearch.length) {
      fetchResult(querySearch, newController)
        .then((res) => setLoadedCompany(res))
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.error('Error fetching results:', err);
          }
        });
    }
  };

  return !!data ? (
    <select value={selectedYear} onChange={handleChanged}>
      {YEARS.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  ) : (
    <></>
  );
}

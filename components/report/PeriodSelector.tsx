'use client';

import { useMainContext } from '@/context/MainContext';
import { CompanyData, SearchQuery } from '@/interfaces';
import Select from '../shared/controls/Select';
import { SUPPORTED_YEARS } from '@/constants';
import { useRef } from 'react';

export default function PeriodSelector({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const {
    queryName,
    queryYear,
    setQueryYear,
    setLoadedCompany,
  } = useMainContext();
  const controllerRef = useRef<AbortController | null>(null);

  const handleChanged = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryYear(Number(evt.target.value));
  };

  return !!data ? (
    <Select options={SUPPORTED_YEARS} setCurrentOption={setQueryYear} />
  ) : (
    <></>
  );
}

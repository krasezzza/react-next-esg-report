'use client';

import { SUPPORTED_YEARS } from '@/constants';
import { useMainContext } from '@/context/MainContext';
import { CompanyData } from '@/interfaces';
import { useRef } from 'react';
import Select from '../shared/controls/Select';

export default function PeriodSelector({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const { queryName, queryYear, setQueryYear, setLoadedCompany } =
    useMainContext();
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

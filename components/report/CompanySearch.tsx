'use client';

import InputSelectSearch from '../shared/inputs/InputSelectSearch';
import { useMainContext } from '@/context/MainContext';
import { SUPPORTED_COMPANIES } from '@/constants';

export default function CompanySearch() {
  const { queryName, setQueryName } = useMainContext();

  const handleChanged = (value: string) => {
    const newTerm = value.length === 1 ? value.trim() : value;
    setQueryName(newTerm);
  };

  return (
    <InputSelectSearch
      placeholderText="Search for company name..."
      selectListItems={SUPPORTED_COMPANIES}
      currentValue={queryName}
      onChangeHandler={handleChanged}
    />
  );
}

'use client';

import { useMainContext } from '@/context/MainContext';
import { Input } from '@chakra-ui/react';
import { useRef } from 'react';

export default function NameSearch({
  startTransition,
}: {
  startTransition: React.TransitionStartFunction;
}) {
  const {
    querySearch,
    setQuerySearch,
    selectedYear,
    loadedCompany,
    setLoadedCompany,
    fetchResult,
  } = useMainContext();
  const controllerRef = useRef<AbortController | null>(null);

  const handleChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm =
      evt.target.value.length === 1
        ? evt.target.value.trim()
        : evt.target.value;
    setQuerySearch(newTerm);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const newController = new AbortController();
    controllerRef.current = newController;

    startTransition(() => {
      if (querySearch.length) {
        fetchResult(querySearch, newController)
          .then((res) => setLoadedCompany(res))
          .catch((err) => {
            if (err.name !== 'AbortError') {
              console.error('Error fetching results:', err);
            }
          });
      }
    });
  };

  const handleFocused = () => {
    if (loadedCompany) {
      setQuerySearch('');
    }
  };

  return (
    <Input
      w={'100%'}
      px={'12px'}
      placeholder="Search for company name..."
      _placeholder={{ opacity: 1, color: 'gray.300' }}
      outline={'none'}
      value={querySearch}
      onChange={handleChanged}
      onClick={handleFocused}
    />
  );
}

'use client';

import { CompanyData } from '@/interfaces';
import { Text } from '@chakra-ui/react';

export default function CompanyTitle({
  data,
}: {
  data: CompanyData | undefined;
}) {
  return !!data ? (
    <Text fontSize={'18px'} fontWeight={'bold'}>
      {data.companyname}
    </Text>
  ) : (
    <></>
  );
}

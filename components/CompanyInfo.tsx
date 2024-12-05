'use client';

import { CompanyData } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function CompanyInfo({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const industryText = (txtVar: string) => {
    const parts = txtVar.split(',');

    let result = txtVar.substring(0, parts[0].length);
    if (parts.length > 1) {
      result += '...';
    }

    return result;
  };

  return !!data ? (
    <Box width={'100%'}>
      <Flex justify={'space-between'}>
        <Text>Industry:</Text>
        <Text fontWeight={'semibold'} truncate>
          {industryText(data.industry)}
        </Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Country:</Text>
        <Text fontWeight={'semibold'}>{data.country}</Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Exchange:</Text>
        <Text fontWeight={'semibold'}>{data.exchangename}</Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Symbol:</Text>
        <Text fontWeight={'semibold'}>{data.tickersymbol}</Text>
      </Flex>
    </Box>
  ) : (
    <></>
  );
}

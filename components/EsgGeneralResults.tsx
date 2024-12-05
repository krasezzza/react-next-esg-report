'use client';

import { CompanyData } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function EsgGeneralResults({
  data,
}: {
  data: CompanyData | undefined;
}) {
  return !!data ? (
    <Box width={'100%'}>
      <Flex justify={'space-between'}>
        <Text>Overall Score:</Text>
        <Text fontWeight={'semibold'} truncate>
          {data['Overall Score'].toFixed(2)}
        </Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Transparency Score:</Text>
        <Text fontWeight={'semibold'} truncate>
          {data['Overall Transparency Score'].toFixed(2)}
        </Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Global Rank:</Text>
        <Text fontWeight={'semibold'} truncate>
          {data['Overall Score Global Rank']}
        </Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Industry Rank:</Text>
        <Text fontWeight={'semibold'} truncate>
          {data['Overall Industry Rank']}
        </Text>
      </Flex>

      <Flex justify={'space-between'}>
        <Text>Region Rank:</Text>
        <Text fontWeight={'semibold'} truncate>
          {data['Overall Region Rank']}
        </Text>
      </Flex>
    </Box>
  ) : (
    <></>
  );
}

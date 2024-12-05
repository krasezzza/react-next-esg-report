'use client';

import { CompanyData } from '@/interfaces';

export default function CompanyTitle({
  data,
}: {
  data: CompanyData | undefined;
}) {
  return !!data ? (
    <span className="text-lg font-bold">{data.companyname}</span>
  ) : (
    <></>
  );
}

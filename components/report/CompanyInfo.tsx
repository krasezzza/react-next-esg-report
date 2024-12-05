'use client';

import { CompanyData } from '@/interfaces';

export default function CompanyInfo({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const industryText = (txtVar: string) => {
    const parts = txtVar.split(',');
    let words = [''];
    if (parts.length) {
      words = parts[0].split(' ');
    }

    let result = txtVar.substring(0, words[0].length);
    if (parts.length > 1 || words.length > 1) {
      result += '...';
    }

    return result;
  };

  return !!data ? (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <span>Industry:</span>
        <span className="font-semibold" title={data.industry}>
          {industryText(data.industry)}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Country:</span>
        <span className="font-semibold">{data.country}</span>
      </div>

      <div className="flex justify-between">
        <span>Exchange:</span>
        <span className="font-semibold">{data.exchangename}</span>
      </div>

      <div className="flex justify-between">
        <span>Symbol:</span>
        <span className="font-semibold">{data.tickersymbol}</span>
      </div>

      <div className="flex justify-between">
        <span>Reported:</span>
        <span className="font-semibold">{data['Year']}</span>
      </div>
    </div>
  ) : (
    <></>
  );
}

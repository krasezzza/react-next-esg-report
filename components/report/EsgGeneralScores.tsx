'use client';

import { CompanyData } from '@/interfaces';

export default function EsgGeneralScores({
  data,
}: {
  data: CompanyData | undefined;
}) {
  return !!data ? (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <span>Overall Score:</span>
        <span className="font-semibold">
          {data['Overall Score'].toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Transparency Score:</span>
        <span className="font-semibold">
          {data['Overall Transparency Score'].toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Global Rank:</span>
        <span className="font-semibold">
          {data['Overall Score Global Rank']}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Industry Rank:</span>
        <span className="font-semibold">{data['Overall Industry Rank']}</span>
      </div>

      <div className="flex justify-between">
        <span>Region Rank:</span>
        <span className="font-semibold">{data['Overall Region Rank']}</span>
      </div>
    </div>
  ) : (
    <></>
  );
}

'use client';

import { CompanyData } from '@/interfaces';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface BarChartData {
  name: string;
  environmental?: number;
  social?: number;
  governance?: number;
}

export default function EsgPillarScores({
  data,
}: {
  data: CompanyData | undefined;
}) {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);

  useEffect(() => {
    if (data) {
      setBarChartData([
        {
          name: 'Environmental',
          environmental: data['Environmental Pillar Score'],
        },
        {
          name: 'Social',
          social: data['Social Pillar Score'],
        },
        {
          name: 'Governance',
          governance: data['Governance Pillar Score'],
        },
      ]);
    } else {
      setBarChartData([]);
    }
  }, [data]);

  return !!data ? (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="environmental" fill="Teal" />
        <Bar dataKey="social" fill="RoyalBlue" />
        <Bar dataKey="governance" fill="LightSalmon" />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <></>
  );
}

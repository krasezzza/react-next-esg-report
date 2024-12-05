export interface SearchQuery {
  name: string;
  year: number;
}

export interface CompanyData {
  request_id: number;
  companyname: string;
  industry: string;
  country: string;
  exchangename: string;
  tickersymbol: string;
  Year: number;
  'Overall Score': number;
  'Overall Transparency Score': number;
  'Environmental Pillar Score': number;
  'Social Pillar Score': number;
  'Governance Pillar Score': number;
  'Overall Score Global Rank': string;
  'Overall Industry Rank': string;
  'Overall Region Rank': string;
  'Latest Score Date': string;
}

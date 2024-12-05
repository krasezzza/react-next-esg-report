import { SearchQuery, CompanyData } from "@/interfaces";

export const fetchResult = async (
  query: SearchQuery,
  // controller: AbortController,
): Promise<CompanyData | undefined> => {
  try {
    // const signal = controller.signal;

    return new Promise((resolve, reject) => {
      // if (signal.aborted) {
      //   reject(new Error('Request aborted'));
      // } else {
        fetch('/esg-data.json')
          .then((response) => response.json())
          .then((esgData) => {
            const result = esgData.find((companyData: CompanyData) => {
              if (
                companyData.companyname.toLowerCase() ===
                query.name.toLowerCase() &&
                companyData['Year'] === query.year
              ) {
                return companyData;
              } else {
                return undefined;
              }
            });
            resolve(result);
          })
          .catch((error) => console.error('Error fetching data:', error));
      // }
    });
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request aborted:', query);
    }
  }
};

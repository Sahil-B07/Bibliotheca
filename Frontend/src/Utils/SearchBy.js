import Papa from "papaparse";

export async function SearchBy(searchBy, query) {
  const response = await fetch("/data/cleaned_genres.csv");
  const csvData = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      complete: (result) => {
        const matchingQuery = result.data
          .filter((row) => {
            const values = row[searchBy];
            return values && values.toLowerCase().includes(query.toLowerCase());
          })
          .map((row) => row[searchBy]);

        resolve(matchingQuery);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

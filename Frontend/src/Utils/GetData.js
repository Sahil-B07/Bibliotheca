export async function GetData(PageNo) {
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKS_API}books/?page=${PageNo}`, {
      method: "GET",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const json = await res.json();
    return json.results;
  }
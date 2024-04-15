export async function GetData(PageNo, book_title='', book_authors='', book_genres='') {
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}books/?book_title=${book_title}&book_authors=${book_authors}&book_genres=${book_genres}&page=${PageNo}`, {
      method: "GET",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const json = await res.json();
    return json.results;
  }
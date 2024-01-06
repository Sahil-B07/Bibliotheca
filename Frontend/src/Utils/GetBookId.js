export async function GetBookId(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKS_API}books/${id}`, {
      method: "GET",
    });
  
    if (!res.ok) {
      // throw new Error("Failed to fetch data");
      console.log("Failed to fetch data");
    }
    return res.text();
  }
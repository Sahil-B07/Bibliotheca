"use client"
import { GetBookId } from '@/Utils/GetBookId'
import { useEffect, useState } from 'react';


export default function Page({ params }) {

    const [HtmlData, setHtmlData] = useState()

  useEffect(() => {
    GetBookId(params.id)
      .then((response) => {
        setHtmlData(response);
        console.log("success");
      })
      .catch((error) => {
        console.error("Fetching Error:", error);
      });
  }, []);


  return <>
    <div className='pt-20 relative'>
      <div dangerouslySetInnerHTML={{ __html: HtmlData }}>
      </div>
      </div>
  </>
}
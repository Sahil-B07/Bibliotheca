const IndexTable = (data, numElements) => {
    const tables = [];

    for (let i = 0; i < data?.length; i += numElements) {
      const rows = [];
      for (let j = i; j < i + numElements; j++) {
        rows.push(
          <tbody key={j} dangerouslySetInnerHTML={{ __html: data[j]?.innerHTML }} />
        );
      }
      tables.push(
      <table className="border-collapse flex flex-col" key={i}>
          {rows}
        </table>
      );
    }
              
      return tables
}

export default IndexTable
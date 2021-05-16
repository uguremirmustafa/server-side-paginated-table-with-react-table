import React, { useState } from 'react';
import Table from '@components/Table/Table';
import useSchools from '@utils/useSchools';

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data: schools, isLoading } = useSchools(page, perPage);
  const list = schools?.data.docs.map((i) => {
    return {
      col1: i.name,
      col2: i.il,
      col3: i.ilce,
      col4: i.kont,
    };
  });
  const data = React.useMemo(() => list, [schools]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'okul adi',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'il',
        accessor: 'col2',
      },
      {
        Header: 'ilce',
        accessor: 'col3',
      },
      {
        Header: 'kontenjan',
        accessor: 'col4',
      },
    ],
    []
  );
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="p-4 bg-white my-4 rounded shadow-xl grid">
      <Table
        data={data}
        columns={columns}
        setPage={setPage}
        setPerPage={setPerPage}
        currentpage={page}
        perPage={perPage}
        totalPage={schools?.data.totalPages}
      />
    </div>
  );
}

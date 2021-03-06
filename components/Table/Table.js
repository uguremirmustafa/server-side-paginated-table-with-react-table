import React from 'react';
import { useTable, usePagination } from 'react-table';

function Table({ setPerPage, setPage, columns, data, currentpage, perPage, totalPage }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // canPreviousPage,
    // canNextPage,
    pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      useControlledState: (state) => {
        return React.useMemo(
          () => ({
            ...state,
            pageIndex: currentpage,
          }),
          [state, currentpage]
        );
      },
      initialState: { pageIndex: currentpage }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: totalPage,
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="table-fixed">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.slice(0, 1).map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-1 py-4 bg-red-100 capitalize w-96 text-left"
                >
                  {column.render('Header')}
                </th>
              ))}
              {headerGroup.headers.slice(1).map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-4 bg-red-100 capitalize w-1/6 text-left"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="truncate p-1 border-b-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between bg-red-100 p-4">
        <button
          onClick={() => {
            setPage(1);
          }}
          disabled={currentpage === 1}
        >
          first
        </button>{' '}
        <button
          onClick={() => {
            setPage((s) => (s === 0 ? 0 : s - 1));
          }}
          disabled={currentpage === 1}
        >
          prev
        </button>{' '}
        <button
          onClick={() => {
            setPage((s) => s + 1);
          }}
          disabled={currentpage === totalPage}
        >
          next
        </button>{' '}
        <button
          onClick={() => {
            setPage(totalPage);
          }}
          disabled={currentpage === totalPage}
        >
          last
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex}
            min="1"
            max={totalPage}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 1;
              setPage(page);
            }}
            className="w-20 border-2 rounded px-2"
          />
        </span>{' '}
        <select
          value={perPage}
          onChange={(e) => {
            // setPageSize(Number(e.target.value));
            setPerPage(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Table;

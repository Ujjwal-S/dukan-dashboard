import { useState } from "react"
import ChevronLeft from "../../../../../assets/images/chevron-left.svg"

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import TableHeader from "./TableHeader"
import Pagination from "./Pagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
}

// const itemsPerPage = 10;

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [page, setPage] = useState(1);  // react-paginate (0 based indexing)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  function handleSearch(searchTerm:string) {
    table.getColumn("order_id")?.setFilterValue(searchTerm)
    setPage(1)
  }

  const handlePageClick = (page: number) => {
    table.setPageIndex(page-1)
    setPage(page)
  };

  return (
    <div className="rounded-md w-full">
        <TableHeader onSearch={handleSearch} />
      <table className="w-full">
        <thead className="bg-search-bg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <th key={header.id} className="py-2.5 px-3" align={(header.column.columnDef.meta as any)?.align}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td 
                    key={cell.id} 
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    align={(cell.column.columnDef.meta as any)?.align}
                    className="py-3.5 px-3 border-b-2 border-b-search-bg">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                No results.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-center space-x-2 py-4 mr-6">
        <button
            onClick={() => {table.previousPage(); setPage(page => page-1)}}
            disabled={!table.getCanPreviousPage()}
            className="p-1.5 pr-3 gap-1.5 flex items-center rounded border border-[#D9D9D9] text-off-black disabled:cursor-not-allowed"
        >
            <img src={ChevronLeft} alt="Previous" />
            <span>Previous</span>
        </button>
        <div className="mx-6 inline-block">
            <Pagination currPage={page} totalPage={Math.ceil(table.getFilteredRowModel().flatRows.length/10)} changePage={handlePageClick} />
        </div>
        <button
            onClick={() => {table.nextPage(); setPage(page => page+1)}}
            disabled={!table.getCanNextPage()}
            className="p-1.5 pl-3 gap-1.5 flex items-center rounded border border-[#D9D9D9] text-off-black disabled:cursor-not-allowed"
        >
            <span>Next</span>
            <img src={ChevronLeft} className="rotate-180" alt="Next" />
        </button>
      </div>
    </div>
  )
}

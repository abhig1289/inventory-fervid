"use client";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";
import { Card } from "../ui/card";

  type GenericTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
}

const GenericTable = <T,>({ data, columns }: GenericTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <Card className="h-[95vh] w-[83vw]">
        <div className="pt-10 w-[83vw] h-[75vh]">
          <span className="flex flex-row pt-5">
            <span className="pl-10 flex flex-row">
              Show
              <select
                className="box-border border-2"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize} className="my-5">
                    {pageSize}
                  </option>
                ))}
              </select>
              entries
            </span>

            <label htmlFor="search" className="flex flex-row pl-[52vw]">
              Search:
              <input
                className=" box-border border-2 "
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
            </label>
          </span>

          <table className="mt-5 ml-10 w-[79vw] box-border border-2">
            <thead className="bg-gray-100 text-xs uppercase">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b-2">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="py-3 pl-10 text-left font-semibold"
                    >
                      <div onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={index}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border-b-2 py-3 pl-10">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="float-right flex items-center gap-2 pr-8 pt-1">
            <button
              className="rounded border p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"Previous"}
            </button>
            <span>{table.getState().pagination.pageIndex + 1}</span>
            <button
              className="rounded border p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {"Next"}
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
};

export default GenericTable;

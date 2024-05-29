"use client";
import {
    createColumnHelper,
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
import { useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import { Eye, Pen, Trash2 } from "lucide-react";
import { Card } from "../ui/card";

type Invoice = {
    invoice: string;
    paymentStatus: string;
    totalAmount: string;
    paymentMethod: string;
}

const Invoice = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function TableDemo() {
    const router = useRouter();
    const [sorting, setSorting] = useState<Sorting>([]);
    const [filtering, setFiltering] = useState<string>('');

    const columnHelper = createColumnHelper();

    const columns: ColumnDef<Invoice>[] = [
        {
            accessorKey: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            // enableSorting: false,
            // enableHiding: false,
        },
        {
            accessorKey: 'invoice',
            header: 'invoice',
        },
        {
            accessorKey: 'paymentStatus',
            header: 'paymentStatus',
        },
        {
            accessorKey: 'totalAmount',
            header: 'totalAmount',
        },
        {
            accessorKey: 'paymentMethod',
            header: 'paymentMethod',
        },
        {
            accessorKey: 'Actions',
            header: 'Actions',
            cell: ({ row }) => (
                <div className="flex space-x-2 h-5 w-auto px-1 rounded-full">
                    <div className="bg-[#7ee2ff] rounded-full p-1">
                        <button className="flex items-center justify-center">
                            <Eye size={14} color={"white"} />
                        </button>
                    </div>
                    <div className="bg-[#78c091] rounded-full p-1">
                        <button className="flex items-center justify-center">
                            <Pen size={14} color={"white"} />
                        </button>
                    </div>
                    <div className="bg-[#ff9770] rounded-full p-1">
                        <button className="flex items-center justify-center">
                            <Trash2 size={14} color={"white"} />
                        </button>
                    </div>
                </div>
            ),
        },
    ];

    type Sorting = SortingState;

    const InwardTable = useReactTable({
        data: Invoice,
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
                <div className="pl-10 pt-5 flex h-[5vw] flex-col text-2xl">
                    Inward Items List
                    <div className=" flex flex-row float-left pt-3 text-xs">
                        <div className="text-sm w-[35vw]">
                            The product list effectively dictates product presentation and provides space
                            to list your products and offering in the most appealing way.
                        </div>
                        <span className="pl-[33vw]">
                            <button
                                type="button"
                                className="float-right w-[11vw] h-10 rounded-lg bg-[#32bdea] text-base font-medium text-white hover:bg-[#32bdea] focus:outline-none focus:ring-4 "
                                onClick={() => { router.push('/products/add') }}
                            >
                                + Add InwardItems
                            </button>
                        </span>
                    </div>
                </div>
                <div className="pt-10 w-[83vw] h-[75vh]">
                    <span className="flex flex-row pt-5">
                        <span className="pl-10 flex flex-row">Show
                            <select
                                className="box-border border-2"
                                value={InwardTable.getState().pagination.pageSize}
                                onChange={(e) => {
                                    InwardTable.setPageSize(Number(e.target.value));
                                }}
                            >
                                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                    <option key={pageSize} value={pageSize} className="my-5">
                                        {pageSize}
                                    </option>
                                ))}
                            </select>entries
                        </span>

                        <label htmlFor="search" className="flex flex-row pl-[45vw]">
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
                            {InwardTable?.getHeaderGroups()?.map((headerGroup) => (
                                <tr key={headerGroup?.id} className="border-b-2">
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className=" py-3 pl-10 text-left font-semibold"
                                        >
                                            <div
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                                {{
                                                    asc: " 🔼",
                                                    desc: " 🔽",
                                                }[header.column.getIsSorted().toString()] ?? null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {InwardTable.getRowModel().rows.map((row, index) => (
                                <tr
                                    key={index}
                                // className="border-b odd:bg-[#E4E4E4] even:bg-[#F0F0F0]"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="border-b-2 py-3 pl-10"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
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
                            onClick={() => InwardTable.previousPage()}
                            disabled={!InwardTable.getCanPreviousPage()}
                        >
                            {"Previous"}
                        </button>
                        <span>
                            {/* <div>Page</div> */}
                            {InwardTable.getState().pagination.pageIndex + 1}
                            {/* of{" "} */}
                            {/* {InwardTable.getPageCount()} */}
                        </span>
                        <button
                            className="rounded border p-1"
                            onClick={() => InwardTable.nextPage()}
                            disabled={!InwardTable.getCanNextPage()}
                        >
                            {"Next"}
                        </button>

                    </div>
                </div>
            </Card>
        </div>
    )
}

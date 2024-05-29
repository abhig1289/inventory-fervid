"use client";
import React from "react";
import { Eye, Pen, Trash2 } from "lucide-react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import GenericTableLayout from "../commons/GenericTableLayout";
import { Checkbox } from "@/components/ui/checkbox";
import GenericCard from "../commons/GenericCard";
import GenericTable from "../commons/GenericTable";

type UserProps = {
    date: string,
    refno: string,
    biller: number,
    customer: number,
    grandtotal: number,
};

const userdata = [
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  {
    date: "Tanner",
    refno: "Linsley",
    biller: 33,
    customer: 100,
    grandtotal: 50,
  },
  
];

const ListReturns = () => {
  const columnHelper = createColumnHelper<UserProps>();
  const columns: ColumnDef<UserProps>[] = [
    {
      accessorKey: "select",
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
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "refno",
      header: "Reference No",
    },
    {
      accessorKey: "biller",
      header: "Biller",
    },
    {
      accessorKey: "customer",
      header: "Customer",
    },
    {
      accessorKey: "grandtotal",
      header: "Grand Total",
    },
    {
      accessorKey: "Actions",
      header: "Actions",
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
  return (
    <GenericTableLayout
      card_title="Returns List"
      card_content="Returns dashboard shows the graphical representation of the channel and Reference
       wise returns with the comparison to the total units sold.."
      button_text="Add Returns"
    >
      <div>
        <GenericTable data={userdata} columns={columns}/>;
      </div>
    </GenericTableLayout>
  );
};

export default ListReturns;

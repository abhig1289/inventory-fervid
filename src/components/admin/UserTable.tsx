"use client"
import { Eye, Pen, Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import GenericTable from "../commons/GenericTable";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
  }

const userdata = [
        {
          firstName: "Tanner",
          lastName: "Linsley",
          age: 33,
          visits: 100,
          progress: 50,
          status: "Married"
        },
        {
            firstName: "Tanner",
            lastName: "Linsley",
            age: 33,
            visits: 100,
            progress: 50,
            status: "Married"
          },
          {
            firstName: "Tanner",
            lastName: "Linsley",
            age: 33,
            visits: 100,
            progress: 50,
            status: "Married"
          },
          {
            firstName: "Tanner",
            lastName: "Linsley",
            age: 33,
            visits: 100,
            progress: 50,
            status: "Married"
          },
          {
            firstName: "Tanner",
            lastName: "Linsley",
            age: 33,
            visits: 100,
            progress: 50,
            status: "Married"
          },
        {
          firstName: "Kevin",
          lastName: "Vandy",
          age: 27,
          visits: 200,
          progress: 100,
          status: "Single"
        },
]

const UserDataTable = () => {
  const columnHelper = createColumnHelper<User>();

  const columns: ColumnDef<User>[] = [
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
    },
    {
      accessorKey: 'firstName',
      header: 'firstName',
    },
    {
      accessorKey: 'lastName',
      header: 'lastName',
    },
    {
      accessorKey: 'age',
      header: 'age',
    },
    {
      accessorKey: 'visits',
      header: 'visits',
    },
    {
        accessorKey: 'progress',
        header: 'progress',
      },
      {
        accessorKey: 'status',
        header: 'status',
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

  return <GenericTable data={userdata} columns={columns} />;
};

export default UserDataTable;

"use client";
import { useState } from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import GenericTable from "@/components/commons/GenericTable";

type User = {
  firstName: string;
  add: boolean;
  edit: boolean;
  view: boolean;
  delete: boolean;
  export: boolean;
};

const initialData: User[] = [
  {
    firstName: "User",
    add: true,
    edit: false,
    view: true,
    delete: false,
    export: false,
  },
  {
    firstName: "roles",
    add: false,
    edit: true,
    view: true,
    delete: false,
    export: false,
  },
  {
    firstName: "school",
    add: true,
    edit: false,
    view: true,
    delete: false,
    export: false,
  },
  {
    firstName: "Dashboard",
    add: false,
    edit: false,
    view: true,
    delete: false,
    export: false,
  },
];

const SalesTable = () => {
  const [data, setData] = useState(initialData);

  const handleCheckboxChange = (index: number, key: keyof User) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, [key]: !item[key] } : item
      )
    );
  };

  const columnHelper = createColumnHelper<User>();
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "firstName",
      header: "Menu",
    },
    {
      accessorKey: "add",
      header: "Add",
      accessorFn: row => 
        <Checkbox
          checked={row.add}
          onCheckedChange={() => handleCheckboxChange(data.indexOf(row), "add")}
          aria-label="Add"
        />,
      cell: info => info.getValue(),
    },
    {
      accessorKey: "edit",
      header: "Edit",
      accessorFn: row => 
        <Checkbox
          checked={row.edit}
          onCheckedChange={() => handleCheckboxChange(data.indexOf(row), "edit")}
          aria-label="Edit"
        />,
      cell: info => info.getValue(),
    },
    {
      accessorKey: "view",
      header: "View",
      accessorFn: row => 
        <Checkbox
          checked={row.view}
          onCheckedChange={() => handleCheckboxChange(data.indexOf(row), "view")}
          aria-label="View"
        />,
      cell: info => info.getValue(),
    },
    {
      accessorKey: "delete",
      header: "Delete",
      accessorFn: row => 
        <Checkbox
          checked={row.delete}
          onCheckedChange={() => handleCheckboxChange(data.indexOf(row), "delete")}
          aria-label="Delete"
        />,
      cell: info => info.getValue(),
    },
    {
      accessorKey: "export",
      header: "Export",
      accessorFn: row => 
        <Checkbox
          checked={row.export}
          onCheckedChange={() => handleCheckboxChange(data.indexOf(row), "export")}
          aria-label="Export"
        />,
      cell: info => info.getValue(),
    },
  ];

  return <GenericTable data={data} columns={columns} />;
};

export default SalesTable;

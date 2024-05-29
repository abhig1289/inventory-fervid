import {
  BadgeIndianRupee,
  BookUser,
  Box,
  Boxes,
  CirclePlus,
  ClipboardList,
  ClipboardMinus,
  Database,
  Eye,
  FilePlus,
  ScrollText,
  ShoppingCart,
  TicketPercent,
  Undo2,
} from "lucide-react";

type SideBarNavItemsProps = {
  name: string;
  path: string;
  icon?: JSX.Element;
  subItems?: SideBarNavItemsProps[];
};

const SideBarNavItems: SideBarNavItemsProps[] = [
  { name: "Dashboards", path: "/dashboard", icon: <Box /> },
  {
    name: "Products",
    path: " ",
    icon: <ShoppingCart />,
    subItems: [
      { name: "List Products", path: "/products/view", icon: <Eye /> },
      { name: "Add Product", path: "/products/add", icon: <CirclePlus /> },
    ],
  },
  {
    name: "Categories",
    path: " ",
    icon: <Boxes />,
    subItems: [
      { name: "List Category", path: "/categories/list-categories", icon: <ScrollText /> },
      { name: "Add Category", path: "/categories/add-categories", icon: <FilePlus /> },
    ],
  },
  {
    name: "Sale",
    path: " ",
    icon: <BadgeIndianRupee />,
    subItems: [
      { name: "List Sale", path: "/sales/list-sales", icon: <ScrollText /> },
      { name: "Add Sale", path: "/sales/add-sales", icon: <FilePlus /> },
    ],
  },
  {
    name: "Purchases",
    path: " ",
    icon: <TicketPercent />,
    subItems: [
      { name: "List Purchase", path: "/purchases/list-purchases", icon: <ScrollText /> },
      { name: "Add Purchase", path: "/purchases/add-purchases", icon: <FilePlus /> },
    ],
  },
  {
    name: "Returns",
    path: " ",
    icon: <Undo2 />,
    subItems: [
      { name: "List Return", path: "/returns/list-returns", icon: <ScrollText /> },
      { name: "Add Return", path: "/returns/add-returns", icon: <FilePlus /> },
    ],
  },
  {
    name: "People",
    path: " ",
    icon: <BookUser />,
    subItems: [
      { name: "Customers", path: "/people/customer", icon: <ScrollText /> },
      { name: "Add Customers",path: "/people/add-customer", icon: <FilePlus /> },
      { name: "Users", path: "/people/user", icon: <ScrollText /> },
      { name: "Add Users", path: "/people/add-user", icon: <FilePlus /> },
      { name: "Suppliers", path: "/people/suppliers", icon: <ScrollText /> },
      { name: "Add Suppliers", path: "/people/add-suppliers", icon: <FilePlus /> },
    ],
  },
  { name: "Reports", path: "/dashboard", icon: <Box /> },
];

export default SideBarNavItems;

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
  { name: "Dashboards", path: "/", icon: <Box /> },
  {
    name: "Products",
    path: " ",
    icon: <ShoppingCart />,
    subItems: [
      { name: "View Products", path: "/products/view", icon: <Eye /> },
      { name: "Add Product", path: "/products/add", icon: <CirclePlus /> },
    ],
  },
  {
    name: "Categories",
    path: " ",
    icon: <Boxes />,
    subItems: [
      { name: "List Category", path: "", icon: <ScrollText /> },
      { name: "Add Category", path: "", icon: <FilePlus /> },
    ],
  },
  {
    name: "Sale",
    path: " ",
    icon: <BadgeIndianRupee />,
    subItems: [
      { name: "List Sale", path: "", icon: <ScrollText /> },
      { name: "Add Sale", path: "", icon: <FilePlus /> },
    ],
  },
  {
    name: "Purchases",
    path: " ",
    icon: <TicketPercent />,
    subItems: [
      { name: "List Purchase", path: "", icon: <ScrollText /> },
      { name: "Add Purchase", path: "", icon: <FilePlus /> },
    ],
  },
  {
    name: "Returns",
    path: " ",
    icon: <Undo2 />,
    subItems: [
      { name: "List Return", path: "", icon: <ScrollText /> },
      { name: "Add Return", path: "", icon: <FilePlus /> },
    ],
  },
  {
    name: "People",
    path: " ",
    icon: <BookUser />,
    subItems: [
      { name: "List Customers", path: "", icon: <ScrollText /> },
      { name: "Add Customers", path: "", icon: <FilePlus /> },
      { name: "Add Users", path: "", icon: <FilePlus /> },
    ],
  },
  {
    name: "Reports",
    path: " ",
    icon: <ClipboardList />,
    subItems: [
      {
        name: "Sales Report",
        path: "/reports/sales",
        icon: <ClipboardMinus />,
      },
      {
        name: "Inventory Report",
        path: "/reports/inventory",
        icon: <Database />,
      },
    ],
  },
];

export default SideBarNavItems;

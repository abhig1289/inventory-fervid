"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  CirclePlus,
  ClipboardList,
  ClipboardMinus,
  CornerRightDown,
  Database,
  Eye,
  LogOutIcon,
  ShoppingCart,
} from "lucide-react";

interface MenuItem {
  name: string;
  path: string;
  icon?: JSX.Element;
  subItems?: MenuItem[];
}

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<string>("dashboard");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { name: "Dashboards", path: "/", icon: <Box /> },
    {
      name: "Products",
      path: "/products",
      icon: <ShoppingCart />,
      subItems: [
        { name: "View Products", path: "/products/view", icon: <Eye/>},
        { name: "Add Product", path: "/products/add", icon: <CirclePlus/> },
      ],
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <ClipboardList />,
      subItems: [
        { name: "Sales Report", path: "/reports/sales", icon: <ClipboardMinus/> },
        { name: "Inventory Report", path: "/reports/inventory", icon: <Database/> },
      ],
    },
    { name: "Logout", path: "/logout", icon: <LogOutIcon /> },
  ];

  const handleSetActive = (name: string,path:string) => {
    setActive(name.toLowerCase());
    router.push(
      menuItems.find((item) => item.name.toLowerCase() === name.toLowerCase())
        ?.path || "/"
    );
  };

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <div className="sidebar bg-white text-black h-full shadow-xl">
      <nav className="mt-6">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div
              className={`flex px-4 py-3 mt-2 rounded-md text-sm cursor-pointer ${
                active === item.name.toLowerCase() ? 'bg-gray-700 text-white' : ''
              }`}
              onClick={() => item.subItems ? toggleSubMenu(item.name) : handleSetActive(item.name, item.path)}
            >
              <span className="text-gray-600 ml-3">{item.icon}</span>
              <span className="ml-3">{item.name}</span>
              {item.subItems && (
                <span
                  className={`ml-20 text-gray-600 cursor-pointer ${openSubMenu === item.name ? 'rotate-90' : ''}`}
                  onClick={() => toggleSubMenu(item.name)}
                >
                  <CornerRightDown
                    size={20}
                    className={`h-7 w-4 transition-transform transform ${openSubMenu === item.name ? 'rotate-90' : ''}`}
                  />
                </span>
              )}
            </div>
            {item.subItems && openSubMenu === item.name && (
              <div className="ml-6">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.name}
                    className={`flex px-4 py-2 mt-1 rounded-lg text-sm cursor-pointer ${
                      active === subItem.name.toLowerCase() ? 'bg-gray-600 text-white' : ''
                    }`}
                    onClick={() => handleSetActive(subItem.name, subItem.path)}
                  >
                    <span className="mr-5 text-gray-600">{subItem.icon}</span>
                    <span>{subItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CornerRightDown } from "lucide-react";

import SideBarNavItems from "./commons/SideBarNavItems";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<string>("dashboard");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const router = useRouter();

  const handleSetActive = (name: string, path: string) => {
    setActive(name.toLowerCase());
    if (path) {
      router.push(path);
    }
  };

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <div className=" sidebar bg-white text-black h-full shadow-xl">
      <nav className="mt-6">
        {SideBarNavItems.map((item) => (
          <div key={item.name}>
            <div
              className={`flex items-center px-4 py-3 mt-2 rounded-md text-sm cursor-pointer ${
                active === item.name.toLowerCase()
                  ? "bg-gray-100 text-black"
                  : ""
              }`}
              onClick={() =>
                item.subItems
                  ? toggleSubMenu(item.name)
                  : handleSetActive(item.name, item.path)
              }
            >
              <span className="w-6 flex justify-center text-gray-600">
                {item.icon}
              </span>
              <span className="ml-3 flex-grow">{item.name}</span>
              {item.subItems && (
                <span
                  className={`w-6 flex justify-center text-gray-600 transition-transform transform ${
                    openSubMenu === item.name ? "rotate-90" : ""
                  }`}
                  onClick={() => toggleSubMenu(item.name)}
                >
                  <CornerRightDown size={20} />
                </span>
              )}
            </div>
            {item.subItems && openSubMenu === item.name && (
              <div className="ml-6">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.name}
                    className={`flex items-center px-4 py-2 mt-1 rounded-lg text-sm cursor-pointer ${
                      active === subItem.name.toLowerCase()
                        ? "bg-gray-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleSetActive(subItem.name, subItem.path)}
                  >
                    <span className="w-6 flex justify-center mr-5 text-gray-600">
                      {subItem.icon}
                    </span>
                    <span className="flex-grow">{subItem.name}</span>
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

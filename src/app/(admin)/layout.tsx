import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col fixed z-10 w-full">
    <Header  heading={""}/>
    <div className="flex flex-1">
      <div className="flex flex-col basis-[18%] bg-white text-black drop-shadow-md">
        <Sidebar />
      </div>
      <main className="flex-1 bg-white overflow-scroll">{children}</main>
    </div>
  </div>
  );
}

export default DashboardLayout

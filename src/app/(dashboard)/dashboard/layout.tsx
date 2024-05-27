import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
    <Header heading={""} />
    <div className="flex flex-1">
      <div className="flex flex-col basis-[16%] bg-white text-black drop-shadow-md">
        <Sidebar />
      </div>
      <main className="flex-1 p-4 bg-white">{children}</main>
    </div>
  </div>
  );
}

export default DashboardLayout

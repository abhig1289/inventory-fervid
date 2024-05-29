import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="fixed w-full z-40 drop-shadow-md bg-white">
        <Header heading="" />
      </div>
      <div className="flex flex-1 pt-[5rem] w-full">
        <div className="fixed top-[5rem] h-[calc(100vh-5rem)] overflow-y-auto w-[15rem] bg-white text-black drop-shadow-md z-30">
          <Sidebar />
        </div>
        <div className="flex-1 ml-[15rem] overflow-y-auto overflow-x-hidden max-w-[calc(100%-15rem)] max-h-[calc(100vh-5rem)] z-30">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

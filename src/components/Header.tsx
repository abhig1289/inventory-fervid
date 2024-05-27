import { Bell, Mail, Maximize2, Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export default function Header({ children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 py-4 bg-white drop-shadow-md">
      <div className="flex pb-2 pt-2 px-4 text-md font-semibold">
        <Maximize2 />
        <span className="ml-4">POSDash</span>
      </div>
      <div className="flex justify-between w-full pl-24">
        <div className="flex items-center relative w-full max-w-md">
          <span className="absolute left-8 ">
            <Search className="text-gray-400 " size={15} />
          </span>
          <Input type="search" placeholder="Search here..." className="pl-12" />
        </div>

        <div className="flex items-center space-x-4 pr-4">
          <DropdownMenu>
            <DropdownMenuTrigger>Language</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>Italian</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex">
                  <Plus className="text-gray-400 pr-2" size={20} /> New Order
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>New Order</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Label htmlFor="username">Email</Label>
                  <div className="grid grid-cols-2 items-center">
                    <Input
                      id="username"
                      className="col-span-3"
                      placeholder="Enter Name or Email"
                    />
                  </div>
                </div>
                <DialogFooter className="flex items-center">
                  <Button type="button">Cancel</Button>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Mail className="text-gray-600" size={20} />         
          <Bell className="text-gray-600" size={20} />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {children}
    </div>
  );
}

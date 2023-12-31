import SideNav from "../ui/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices | Acme Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col flex-1 py-4 pr-4 pl-2">{children}</div>
    </div>
  );
}

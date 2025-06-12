// import SideNav from "@/app/components/ui/dashboard/SideNav";
import Nav from "../components/ui/dashboard/Nav";
// import Sidebar from "../components/ui/dashboard/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* <SideNav /> */}

        <Nav/>
        {/* <Sidebar/> */}
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

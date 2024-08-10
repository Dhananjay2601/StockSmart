import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassname = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 ease-in-out h-full overflow-hidden shadow-md z-40`;

  return (
    <div className={sidebarClassname}>
      {/* TOP LOGO */}
      <div
        className={`${
          isSidebarCollapsed ? "px-5" : "px-8"
        } flex gap-3 justify-between md:justify-normal items-center pt-8`}
      >
        <div className="Logo">Logo</div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          DJSTOCK
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLinks
          href="/dashbaord"
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
          icon={Layout}
        />
        <SidebarLinks
          href="/inventory"
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
          icon={Archive}
        />
        <SidebarLinks
          href="/products"
          label="Products"
          isCollapsed={isSidebarCollapsed}
          icon={Clipboard}
        />
        <SidebarLinks
          href="/user"
          label="User"
          isCollapsed={isSidebarCollapsed}
          icon={User}
        />
        <SidebarLinks
          href="/settings"
          label="Settings"
          isCollapsed={isSidebarCollapsed}
          icon={SlidersHorizontal}
        />
        <SidebarLinks
          href="/expenses"
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
          icon={CircleDollarSign}
        />
      </div>

      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500 ">
          &copy; 2024 DJSTOCK
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

import Sidebar, { SidebarNavlink } from "../../ui/Sidebar";
import LogoutButton from "../authentication/LogoutButton";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";

function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarNavlink to="sprava-produktov">
        <span>
          <MdProductionQuantityLimits />
        </span>{" "}
        Správa produktov
      </SidebarNavlink>
      <SidebarNavlink to="sprava-kategorii">
        <span>
          <MdOutlineCategory />
        </span>{" "}
        Správa kategórií
      </SidebarNavlink>

      <SidebarNavlink to="zmena-hesla">
        <span><TbPasswordUser /></span> Zmena hesla
      </SidebarNavlink>
      <LogoutButton />
    </Sidebar>
  );
}

export default AdminSidebar;

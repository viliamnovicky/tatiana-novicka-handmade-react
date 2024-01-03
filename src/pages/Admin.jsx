import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

const StyledAdminCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

function Admin() {
  return (
    <StyledAdminCont>
      <Sidebar />
      <Outlet />
    </StyledAdminCont>
  );
}

export default Admin;

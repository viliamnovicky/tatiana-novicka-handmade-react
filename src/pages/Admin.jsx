import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

import Modal from "../ui/Modal";

const StyledAdminCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

function Admin() {
  return (
    <StyledAdminCont>
      <Sidebar />
      <Outlet />
      <Modal/>
    </StyledAdminCont>
  );
}

export default Admin;

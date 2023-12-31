import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";
import { getProducts } from "../services/apiProducts";
import { useQuery } from "@tanstack/react-query";

const StyledAdminCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
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

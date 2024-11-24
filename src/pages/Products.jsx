import styled from "styled-components";
import ProductsContainer from "../features/products/ProductsContainer";
import Sidebar from "../ui/Sidebar";
import { Outlet } from "react-router-dom";
import Modal from "../ui/Modal";

const StyledProductsCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

function Products() {
  return (
    <StyledProductsCont>
      <Sidebar />
      <ProductsContainer />
    </StyledProductsCont>
  );
}

export default Products;

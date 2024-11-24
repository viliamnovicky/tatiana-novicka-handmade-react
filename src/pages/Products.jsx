import styled from "styled-components";
import ProductsContainer from "../features/products/ProductsContainer";
import ProductsSidebar from "../features/products/ProductsSidebar";

const StyledProductsCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  overflow: hidden;
  height: auto;
`;

function Products() {
  return (
    <StyledProductsCont>
      <ProductsSidebar />
      <ProductsContainer />
    </StyledProductsCont>
  );
}

export default Products;

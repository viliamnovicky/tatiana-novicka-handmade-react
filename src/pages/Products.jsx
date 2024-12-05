import styled from "styled-components";
import ProductsContainer from "../features/products/ProductsContainer";
import ProductsSidebar from "../features/products/ProductsSidebar";

const StyledProductsCont = styled.div`
  display: grid;
  grid-template-columns: 35rem auto;
  overflow: hidden;
  margin: auto;

  @media (max-width: 1365px) {
    grid-template-columns: 1fr;
  }
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

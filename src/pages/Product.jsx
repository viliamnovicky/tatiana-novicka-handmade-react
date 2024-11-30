import styled from "styled-components";
import ProductDetail from "../features/products/ProductDetail"
import ProductsSidebar from "../features/products/ProductsSidebar"
import Button from "../ui/Button";

const StyledProductCont = styled.div`
  display: grid;
  grid-template-columns: 35rem auto;
  overflow: hidden;
  height: auto;
`;
function Product() {
    return (
        <StyledProductCont>
        <ProductsSidebar/>
        <ProductDetail/>
        </StyledProductCont>

    )
}

export default Product

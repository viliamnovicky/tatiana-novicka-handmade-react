import styled from "styled-components";
import TableProducts from "../ui/TableProducts";
import Buttons from "../ui/Buttons";
import NewProduct from "../features/products/NewProduct";

const StyledManageProducts = styled.div`
  position: relative;
  overflow: hidden;
  height: 72vh;
`;

function ManageProducts() {
  return (
    <StyledManageProducts>
      <TableProducts />
      <Buttons>
        <NewProduct />
      </Buttons>
    </StyledManageProducts>
  );
}

export default ManageProducts;

import styled from "styled-components";
import TableProducts from "../dashboard/AdminProducts";
import NewProduct from "./NewProduct";
import Buttons from "../../ui/Buttons";

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

import styled from "styled-components";
import Buttons from "../../ui/Buttons";
import TableCategories from "../categories/TableCategories";
import NewProduct from "../products/NewProduct";


const StyledManageProducts = styled.div`
  position: relative;
  overflow: hidden;
  height: 72vh;
`;

function ManageProducts() {
  return (
    <StyledManageProducts>
      <TableCategories />
      <Buttons>
        <NewProduct />
      </Buttons>
    </StyledManageProducts>
  );
}

export default ManageProducts;

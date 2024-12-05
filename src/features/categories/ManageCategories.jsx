import styled from "styled-components";
import Buttons from "../../ui/Buttons";
import TableCategories from "../categories/TableCategories";
import NewCategory from "./NewCategory";


const StyledManageProducts = styled.div`
  position: relative;
  overflow: hidden;
  height: 72vh;
`;

function ManageProducts() {
  return (
    <StyledManageProducts>
      <TableCategories />
        <NewCategory />
    </StyledManageProducts>
  );
}

export default ManageProducts;

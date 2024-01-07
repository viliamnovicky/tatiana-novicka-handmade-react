import styled from "styled-components";
import TableProducts from "../ui/TableProducts";
import ManageButtons from "../ui/ManageButtons";

const StyledManageProducts = styled.div`
  position:relative;
  overflow: hidden;
  height: 72vh;
`

function ManageProducts() {
  return (
    <StyledManageProducts>
      <TableProducts />
      <ManageButtons />
    </StyledManageProducts>
  );
}

export default ManageProducts;

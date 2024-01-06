import styled from "styled-components";
import TableProducts from "../ui/TableProducts";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;



function ManageProducts() {
  
  return (
    <Container>
      <TableProducts/>
    </Container>
  );
}

export default ManageProducts;

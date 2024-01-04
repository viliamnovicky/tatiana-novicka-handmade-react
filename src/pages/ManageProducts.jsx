import styled from "styled-components";
import HeadingAdmin from "../ui/HeadingAdmin";
import TableProducts from "../ui/TableProducts";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;



function ManageProducts() {
  
  return (
    <Container>
      <HeadingAdmin>Správa produktov</HeadingAdmin>
      <TableProducts/>
    </Container>
  );
}

export default ManageProducts;

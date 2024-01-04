import styled from "styled-components";
import { StyledForm, StyledFormCont, StyledFormInput, StyledFormLabel } from "../ui/Form";
import Button from "../ui/Button";
import HeadingAdmin from "../ui/HeadingAdmin";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function NewProduct() {
  return (
    <Container>
      <HeadingAdmin>Nový produkt</HeadingAdmin>
      <StyledForm>
        <StyledFormCont>
          <StyledFormLabel>Názov Produktu</StyledFormLabel>
          <StyledFormInput type="text" />
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormLabel>Kategória</StyledFormLabel>
          <StyledFormInput type="text" />
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormLabel>Popis Produktu</StyledFormLabel>
          <StyledFormInput type="textarea" />
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormLabel>Cena</StyledFormLabel>
          <StyledFormInput type="text" />
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormLabel>Dostupnosť</StyledFormLabel>
          <StyledFormInput type="text" />
        </StyledFormCont>
        <Button>pridať</Button>
      </StyledForm>
    </Container>
  );
}

export default NewProduct;

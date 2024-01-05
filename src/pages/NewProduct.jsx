import styled from "styled-components";
import { StyledForm, StyledFormCont, StyledFormContImage, StyledFormInput, StyledFormLabel } from "../ui/Form";
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
          <StyledFormInput type="text" placeholder="Názov Produktu" />
          <StyledFormLabel>Názov Produktu</StyledFormLabel>
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormInput type="text" placeholder="Kategória" />
          <StyledFormLabel>Kategória</StyledFormLabel>
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormInput type="textarea" placeholder="Popis Produktu" />
          <StyledFormLabel>Popis Produktu</StyledFormLabel>
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormInput type="text" placeholder="Cena" />
          <StyledFormLabel>Cena</StyledFormLabel>
        </StyledFormCont>
        <StyledFormCont>
          <StyledFormInput type="text" placeholder="Dostupnosť" />
          <StyledFormLabel>Dostupnosť</StyledFormLabel>
        </StyledFormCont>
        <StyledFormContImage>
          <StyledFormLabel>Fotografia</StyledFormLabel>
          <StyledFormInput type="file" placeholder="Fotografia" />
        </StyledFormContImage>
        <Button>pridať</Button>
      </StyledForm>
    </Container>
  );
}

export default NewProduct;

import styled, { css } from "styled-components";
import {
  FormGroup,
  StyledForm,
  StyledFormCont,
  StyledFormContImage,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
} from "../ui/Form";
import Button from "../ui/Button";
import HeadingAdmin from "../ui/HeadingAdmin";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;

  ${(props) =>
    props.type === "form-new-product" &&
    css`
      width: 60%;
    `}

`;

function NewProduct() {
  return (
    <Container type="form-new-product">
      <HeadingAdmin>Nový produkt</HeadingAdmin>
      <StyledForm>
        <FormGroup>
          <StyledFormCont>
            <StyledFormInput type="text" placeholder="Názov Produktu" />
            <StyledFormLabel>Názov Produktu</StyledFormLabel>
          </StyledFormCont>
          <StyledFormCont>
            <StyledFormInput type="text" placeholder="Cena" />
            <StyledFormLabel>Cena</StyledFormLabel>
          </StyledFormCont>
          <StyledFormCont>
            <StyledFormInput type="text" placeholder="Dostupnosť" />
            <StyledFormLabel>Dostupnosť</StyledFormLabel>
          </StyledFormCont>
        </FormGroup>
        <FormGroup>
          <StyledFormCont type="text">
            <StyledFormInput as="textarea" rows="10" cols="50" placeholder="Popis Produktu" />
            <StyledFormLabel>Popis Produktu</StyledFormLabel>
          </StyledFormCont>
          <StyledFormCont>
            <StyledFormLabel for="category">Kategória</StyledFormLabel>
            <StyledFormSelect id="category">
              <option value={1}>Čiapky</option>
              <option value={2}>Kabelky</option>
              <option value={3}>Vankúše</option>
            </StyledFormSelect>
          </StyledFormCont>
          <StyledFormContImage>
            <StyledFormLabel>Fotografia</StyledFormLabel>
            <StyledFormInput type="file" placeholder="Fotografia" />
          </StyledFormContImage>
          <Button>pridať</Button>
        </FormGroup>
      </StyledForm>
    </Container>
  );
}

export default NewProduct;

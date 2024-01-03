import styled from "styled-components";
import { StyledForm, StyledFormCont, StyledFormInput, StyledFormLabel } from "../ui/Form";
import Button from "../ui/Button"
  
function NewProduct() {
  return (
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
  );
}

export default NewProduct;

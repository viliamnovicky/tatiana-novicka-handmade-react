import styled from "styled-components";

function NewProduct() {
  const StyledForm = styled.form`
    background: var(--color-grey-100);
    width: 100%;
  `;
  const StyledFormCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    margin: auto;
    padding: 2rem 3rem;
  `;

  const StyledFormLabel = styled.label`
    text-transform: uppercase;
    padding-bottom: .5rem;
    padding-left: 1.5rem;
  `;

  const StyledFormInput = styled.input`
    padding: 1rem 1rem;
    border-radius: 5rem;
    outline: none;
    border: 1px solid var(--color-grey-100);
    outline: 5px solid var(--color-primary-50);
    background: var(--color-grey-200);
    font-size: 1.8rem;

    &:active, &:focus {
        outline: 5px solid var(--color-primary-500);
        background: var(--color-grey-50);
    }
  `
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
    </StyledForm>
  );
}

export default NewProduct;

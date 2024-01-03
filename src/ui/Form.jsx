import styled from "styled-components";

export const StyledForm = styled.form`
  background: var(--color-grey-100);
  width: 50rem;
  position: relative;

  button {
    position: absolute !important;
    right: 3rem;
  }
`;
export const StyledFormCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: auto;
  padding: 2rem 3rem;
`;

export const StyledFormLabel = styled.label`
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
`;

export const StyledFormInput = styled.input`
  padding: 1rem 1rem;
  border-radius: 5rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--color-grey-200);
  font-size: 1.8rem;

  &:active,
  &:focus {
    outline: 5px solid var(--color-primary-500);
    background: var(--color-grey-50);
  }
`;

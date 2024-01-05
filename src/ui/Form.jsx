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
  height: 11rem;
  flex-direction: column;
  width: 50rem;
  margin: auto;
  padding: 2rem 3rem;
`;

export const StyledFormContImage = styled.div`
  display: flex;
  height: 15rem;
  flex-direction: column;
  width: 50rem;
  margin: auto;
  padding: 2rem 3rem;
`;

export const StyledFormLabel = styled.label`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  font-size: 2rem;
  font-weight: 400;
`;

export const StyledFormInput = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--color-grey-200);
  font-size: 1.8rem;

  &::placeholder {
    transition: opacity, .5s;
  }

  & + label {
    margin-top: -3.5rem;
    opacity: 0;
    visibility: hidden;
  }

  &:focus + label {
    opacity: 1;
    visibility: visible;
    margin-top: .5rem;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::file-selector-button {
    border-radius: 10rem;
    color: var(--color-primary-50);
    background: var(--color-primary-300);
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background: var(--color-primary-600);
    }
  }

  &:active,
  &:focus {
    outline: 5px solid var(--color-primary-500);
    background: var(--color-grey-50);
  }
`;

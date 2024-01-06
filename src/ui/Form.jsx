import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  background: var(--color-grey-100);
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  button {
    position: absolute !important;
    right: 3rem;
  }
`;

export const FormGroup = styled.div``

export const StyledFormCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: auto;
  padding: 2rem 3rem;
  height: 11rem;

  ${(props) =>
    props.type === "text" &&
    css`
      height: 18.5rem;
    `}
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
  font-weight: 500;
`;

export const StyledFormSelect = styled.select`
  padding: 1.3rem 1.5rem;
  border-radius: 5rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--color-grey-200);
  font-size: 1.8rem;

  & option {
    background: var(--color-grey-50);
  }

  &:active,
  &:focus {
    outline: 5px solid var(--color-primary-500);
    background: var(--color-grey-50);
  }
`;

export const StyledFormInput = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--color-grey-200);
  font-size: 1.8rem;

  &::placeholder {
    transition: opacity, 0.5s;
  }

  & + label {
    margin-top: -3.5rem;
    opacity: 0;
    visibility: hidden;
  }

  &:focus + label {
    opacity: 1;
    visibility: visible;
    margin-top: 0.5rem;
    color: var(--color-primary-700);
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
    transition: all 0.3s;

    &:hover {
      background: var(--color-primary-600);
    }
    ${(props) =>
      props.as === "textarea" &&
      css`
        height: 30rem;
      `}
  }

  &:active,
  &:focus {
    outline: 5px solid var(--color-primary-500);
    background: var(--color-grey-50);
  }
`;

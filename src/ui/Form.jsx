import styled, { css } from "styled-components";

export const FormError = styled.p`
  display: inline;
  color: var(--color-secondary-400);
  position: absolute;
  right: 1rem;
`;

export const StyledForm = styled.form`
  background: var(--color-grey-100);
  width: 100rem;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-between;

  button {
    position: absolute !important;
    right: 3rem;
  }
`;

export const Form = styled.form`
  min-width: 50rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 2rem;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const StyledFormCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem 3rem;
  height: 11rem;
  width: 100%;

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
  margin: auto;
  padding: 2rem 3rem;
  width: 100%;
`;

export const StyledFormLabel = styled.label`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
`;
export const Label = styled.label`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid var(--color-grey-100);
  outline: 5px solid var(--color-primary-50);
  background: var(--color-grey-200);
  font-size: 1.8rem;
  width: 100%;
  width: 100%;

  &::placeholder {
    transition: opacity, 0.5s;
  }

  & + label {
    margin-top: -3.5rem;
    opacity: 0;
    visibility: hidden;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    opacity: 1;
    visibility: visible;
    margin-top: 0.2rem;
    color: var(--color-primary-700);
  }

  &:not(:placeholder-shown) + label {
    color: var(--color-grey-700);
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
  width: 100%;
  width: 100%;

  &::placeholder {
    transition: opacity, 0.5s;
  }

  & + label {
    margin-top: -3.5rem;
    opacity: 0;
    visibility: hidden;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    opacity: 1;
    visibility: visible;
    margin-top: 0.2rem;
    color: var(--color-primary-700);
  }

  &:not(:placeholder-shown) + label {
    color: var(--color-grey-700);
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

function FormRow({ label, error, children, type }) {
  return (
    <StyledFormCont type={type}>
      {type != "option" ? (
        <>
          {children}
          <StyledFormLabel htmlFor={children.props.id}>
            {label}
            {error && <FormError>{error}</FormError>}
          </StyledFormLabel>
        </>
      ) : (
        <>
          <StyledFormLabel htmlFor={children.props.id}>
            {label}
            {error && <FormError>{error}</FormError>}
          </StyledFormLabel>
          {children}
        </>
      )}
    </StyledFormCont>
  );
}

export default FormRow;

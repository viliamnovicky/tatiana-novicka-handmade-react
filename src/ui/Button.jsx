import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  adminSidebar: css`
    font-weight: 100;
  padding: 2rem 3rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-grey-300);  
  font-size: 2rem;
  background: none;
  text-align: left;
  border-radius: 0;
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  gap: 2rem;

  &:hover {
    color: var(--color-grey-950);
    padding-left: 4rem;
  }

  &:last-child {
    border-bottom: none;
  }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${props=>sizes[props.size]}
  ${props=>variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
}

export default Button

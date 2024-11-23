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
    color: var(--color-primary-50);
    background-color: var(--color-primary-300);

    &:hover {
      background-color: var(--color-primary-700);
    }
  `,
  secondary: css`
    color: var(--color-secondary-600);
    background: var(--color-secondary-100);

    &:hover {
      background-color: var(--color-secondary-200);
    }
  `,

  admin: css`
    outline: none;
    border: none;
    font-weight: 400;
    padding: 2rem 3rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-grey-200);
    font-size: 2rem;
    background: none;
    text-align: left;
    border-radius: 0;
    color: var(--color-primary-800);
    display: flex;
    align-items: center;
    gap: 2rem;
    box-shadow: none;

    &:hover {
      color: var(--color-primary-950);
      padding-left: 4rem;
    }

    &:last-child {
      border-bottom: none;
    }

    &:active,
    &.active:link,
    &.active:visited {
      padding-left: 4rem;
      color: var(--color-primary-950);
      background: var(--color-primary-100);
      border-radius: 2rem;
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
  border-radius: 10rem;
  box-shadow: var(--shadow-sm);
  text-transform: uppercase;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "large",
};

export default Button;

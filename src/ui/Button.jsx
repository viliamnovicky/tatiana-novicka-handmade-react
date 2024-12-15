import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    width: 10rem;
    height: 3rem;
    text-transform: uppercase;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: .7rem 2rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    width: auto;
  `,
  filter: css`
    font-size: 1.2rem;
    padding: .8rem 1rem;
    font-weight: 800;

    & span {
      font-size: 1.4rem;
    }

    &:active {
      background: var(--color-primary-600);
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    padding: .5rem .8rem;

    & span {
      font-size: 1.2rem;
    }
    }

    @media (max-width: 360px) {
    font-size: .8rem;

    & span {
      font-size: 1rem;
    }
  }
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
    background: var(--color-secondary-50);

    &:hover {
      background-color: var(--color-secondary-200);
    }
  `,

  cart: css`
    background: var(--color-green-200);
    color: var(--color-grey-950);

    svg {
      font-size: 2rem;
    }

    &:hover {
      background: var(--color-green-800);
    }
  `,

  sidebar: css`
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
    justify-content: left !important;
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

  disabled: css`
    color: var(--color-grey-950);
    background-color: var(--color-grey-200);
    cursor: not-allowed;

    svg {
      font-size: 2rem;
    }

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,

  back: css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    padding: 0;
    left: 0rem;
    background: var(--color-secondary-50);

    &:hover {
      background: var(--color-secondary-200);
    }
  `,
  newProduct: css`
    position: absolute;
    bottom: 2rem;
    left: calc(50% + 17.5rem);
    transform: translateX(-50%);

    color: var(--color-primary-50);
    background-color: var(--color-primary-300);

    &:hover {
      background-color: var(--color-primary-700);
    }
  `,
  newCategory: css`
    position: absolute;
    bottom: 0rem;
    left: 50%;
    transform: translateX(-50%);

    color: var(--color-primary-50);
    background-color: var(--color-primary-300);

    &:hover {
      background-color: var(--color-primary-700);
    }
  `,
  hamburger: css`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    padding: 0;
    background: var(--color-primary-100);
    color: var(--color-primary-950);
    position: absolute;
    right: 2rem;
    bottom: -5rem;
    z-index: 15;
    visibility: hidden;
    * {
      transform-origin: center;
      animation: rotate-hamburger 0.2s forwards;
    }
    @media (max-width: 1365px) {
      visibility: visible;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 10rem;
  box-shadow: var(--shadow-sm);
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  ${(props) =>
    props.active &&
    css`
      background: var(--color-primary-600) !important;
    `}

  span {
    padding-left: 1rem;
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "large",
};

export default Button;

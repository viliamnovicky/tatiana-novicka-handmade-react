import styled, { css } from "styled-components";

const AnchorLinkLogo = styled.a`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 1365px) {
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
  }

  ${(props) =>
    props.color === "primary" &&
    css`
      color: var(--color-primary-950);

      &:hover {
        background: var(--color-primary-50);
      }
    `}

  ${(props) =>
    props.color === "secondary" &&
    css`
      color: var(--color-secondary-950);

      &:hover {
        background: var(--color-secondary-50);
      }
    `}
`;

AnchorLinkLogo.defaultProps = {
  color: "primary",
};

export default AnchorLinkLogo;

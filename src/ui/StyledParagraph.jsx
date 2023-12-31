import styled, { css } from "styled-components";

const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 1.6rem;

  ${(props) =>
    props.color === "primary" &&
    css`
      color: var(--color-primary-900);
    `}

  ${(props) =>
    props.color === "secondary" &&
    css`
      var(--color-secondary-900)
    `}
    ${(props) =>
    props.color === "secondary-light" &&
    css`
      var(--color-primary-50)
    `}
    ${(props) =>
    props.color === "primary-light" &&
    css`
      var(--color-secondary-50)
    `}
`;

StyledParagraph.defaultProps = {
  color: "primary",
};

export default StyledParagraph;

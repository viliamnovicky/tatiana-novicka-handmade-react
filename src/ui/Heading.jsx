import styled, { css } from "styled-components";

const fonts = {
  hand: css`
    font-family: var(--font-dancing);
  `,
};

const types = {
  name: css`
    width: 100%;
    padding-bottom: 0rem !important;;
  `
}

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      
      @media (max-width: 600px) {
        font-size: 2.5rem;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  line-height: 1.5;
  ${(props) => fonts[props.font]}
  ${(props) => types[props.type]}
  margin: auto;
  max-width: 100rem;
  text-align: center;
  padding: 2rem;
`;

export default Heading;

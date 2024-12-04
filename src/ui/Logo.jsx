import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;

`;

const StyledHeader = styled.h1`
  font-size: 5rem;
  font-family: var(--font-dancing);

  @media (max-width: 1365px) {
    font-size: 3.7rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 2.9rem;
  padding-left: 2.9rem;
  padding-bottom: 1.5rem;

  @media (max-width: 1365px) {
    font-size: 1.4rem;
    letter-spacing: 2rem;
    padding-left: 2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledHeader>Tatiana Novická</StyledHeader>
      <StyledParagraph>handmade</StyledParagraph>
    </StyledLogo>
  );
}

export default Logo;

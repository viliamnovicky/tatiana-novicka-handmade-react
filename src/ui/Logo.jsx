import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledHeader = styled.h1`
  font-size: 6rem;
  font-family: var(--font-dancing);
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3.3rem;
  padding-left: 3.3rem;
  padding-bottom: 2rem;
`

function Logo() {
  return (
    <StyledLogo>
      <StyledHeader>Tatiana Novická</StyledHeader>
      <StyledParagraph>handmade</StyledParagraph>
    </StyledLogo>
  );
}

export default Logo;

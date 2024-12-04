import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import StyledParagraph from "./StyledParagraph";
import AnchorLinkLogo from "./AnchorLinkLogo";

const StyledFooter = styled.footer`
  height: 100%;
  background-color: var(--color-secondary-200);
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  border-radius: 1rem;
  z-index: 10;

  @media (max-width: 1365px) {
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: flex-end;
    font-size: 1.4rem;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1365px) {
    gap: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterBox>
        <StyledParagraph color="secondary">&copy; Tatiana Novická {new Date().getFullYear()} </StyledParagraph>
        <AnchorLinkLogo

          href="https://www.facebook.com/TatiJanaN-handmade-249652415190403"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookSquare />
        </AnchorLinkLogo>
      </FooterBox>
      <FooterBox>
        <StyledParagraph color="secondary">Vytvoril s 🤍 Viliam Novický Visual Arts</StyledParagraph>
        <AnchorLinkLogo href='https://www.facebook.com/ViliamNovickyVisualArts' target='_blank'>
          <FaFacebookSquare />
        </AnchorLinkLogo>
        <AnchorLinkLogo href='https://www.instagram.com/viliamnovicky/' target='_blank'>
          <FaSquareInstagram />
        </AnchorLinkLogo>
        <AnchorLinkLogo href='https://www.youtube.com/channel/UCp9fNN9AzBfN6XVvNykU-_Q' target='_blank'>
          <FaYoutube />
        </AnchorLinkLogo>
      </FooterBox>
    </StyledFooter>
  );
}

export default Footer;

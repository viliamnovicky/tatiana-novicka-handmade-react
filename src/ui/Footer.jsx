import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const StyledFooter = styled.footer`
  height: 10rem;
  background-color: var(--color-secondary-200);
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterBox>
        <p>&copy; tatiana Novická {new Date().getFullYear()} </p>
        <a
          href="https://www.facebook.com/TatiJanaN-handmade-249652415190403"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      </FooterBox>
      <FooterBox>
        <p>Vytvoril s 🤍 Viliam Novický Visual Arts</p>
        <a>
          <FaFacebookSquare />
        </a>
        <a>
          <FaSquareInstagram />
        </a>
        <a>
          <FaYoutube />
        </a>
      </FooterBox>
    </StyledFooter>
  );
}

export default Footer;

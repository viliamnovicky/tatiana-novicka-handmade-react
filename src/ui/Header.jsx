import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  background-color: var(--color-primary-300);
  padding: 1.2rem 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-primary-50);
  border-radius: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100vw;
  position: relative;

  @media (max-width: 1365px) {
    justify-content: center;
    padding: 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;

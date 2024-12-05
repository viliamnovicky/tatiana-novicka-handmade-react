import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import Button from "./Button";
import { useState } from "react";

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 1365px) {
    visibility: hidden;
    opacity: 0;
    width: 100vw;
    position: absolute;
    bottom: -24rem;
    border-radius: 1rem;
    right: 0;
    transform: translateY(-50%);
    flex-direction: column;
    background: var(--color-primary-200);
    z-index: 10;
    padding: 2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 0.3rem;

  @media (max-width: 1365px) {
    padding: 0;
  }

  &:hover {
    border-bottom: 3px solid var(--color-secondary-200);
  }

  &:active,
  &.active:link,
  &.active:visited {
    border-bottom: 3px solid var(--color-secondary-300);
  }
`;

function Navbar() {
  const [isVisibleNavbar, setIsvisibleNavbar] = useState(false)
  return (
    <>
    <Button variation="hamburger" onClick={() => setIsvisibleNavbar(!isVisibleNavbar)}>{!isVisibleNavbar ? <RxHamburgerMenu /> : <IoCloseOutline  />
    }
    </Button>
      <NavList className={isVisibleNavbar ? "navbar-visible-phone" : ""}>
        <li>
          <StyledNavLink to="domov">O mne</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="produkty">Produkty</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="kontakt">Kontakt</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="admin/sprava-produktov">admin</StyledNavLink>
        </li>
      </NavList>
    </>
  );
}

export default Navbar;

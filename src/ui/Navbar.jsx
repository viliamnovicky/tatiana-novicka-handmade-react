import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: .3rem;

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
  return (
    <NavList>
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
  );
}

export default Navbar;

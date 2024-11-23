import styled from "styled-components";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import LogoutButton from "../features/authentication/LogoutButton";

const StyledSidebar = styled.aside`
  width: 40rem;
  display: flex;
  flex-direction: column;
  border: none;
  padding-top: 4.5rem;

  span {
    font-size: 2.5rem;
    display: flex;
    transition: all 0.2s;
    color: var(--color-primary-800);
    align-items: center;

    &:hover {
      color: var(--color-grey-950);
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  outline: none;
  border: none;
  font-weight: 400;
  padding: 2rem 3rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-grey-200);
  font-size: 2rem;
  background: none;
  text-align: left;
  border-radius: 0;
  color: var(--color-primary-800);
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: none;

  &:hover {
    color: var(--color-primary-950);
    padding-left: 4rem;
  }

  &:last-child {
    border-bottom: none;
  }

  &:active,
    &.active:link,
    &.active:visited {
      padding-left: 4rem;
      color: var(--color-primary-950);
      background: var(--color-primary-100);
      border-radius: 2rem;
    }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNavLink to="sprava-produktov">
        <span>
          <GrDocumentUpdate />
        </span>{" "}
        Správa produktov
      </StyledNavLink>

      <StyledNavLink to="zmena-hesla">
        <span>
          <RiLockPasswordLine />
        </span>{" "}
        Zmena hesla
      </StyledNavLink>
      <LogoutButton/>
    </StyledSidebar>
  );
}

export default Sidebar;

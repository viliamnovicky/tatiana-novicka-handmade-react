import styled from "styled-components";
import Button from "./Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.aside`
  width: 40rem;
  display: flex;
  flex-direction: column;
  border: none;

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
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNavLink to="novy-produkt">
        <span>
          <IoIosAddCircleOutline />
        </span>{" "}
        Pridať produkt
      </StyledNavLink>
      <StyledNavLink to="">
        <span>
          <GrDocumentUpdate />
        </span>{" "}
        Aktualizovať produkt
      </StyledNavLink>
      <StyledNavLink to="">
        <span>
          <MdDeleteOutline />
        </span>{" "}
        Odstrániť produkt
      </StyledNavLink>
      <StyledNavLink to="">
        <span>
          <RiLockPasswordLine />
        </span>{" "}
        Zmena hesla
      </StyledNavLink>
      <StyledNavLink to="">
        <span>
          <BiLogOutCircle />
        </span>{" "}
        Odhlásiť
      </StyledNavLink>
    </StyledSidebar>
  );
}

export default Sidebar;

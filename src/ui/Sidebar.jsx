import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.aside`
  width: 35rem;
  max-height: calc(100vh - 22rem);
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0 auto;
  overflow-y: scroll;

  @media (max-width: 1365px) {
    opacity: 0;
    visibility: hidden; 
    position: absolute;
    width: 0;
  }

  .active {
    background: var(--color-primary-400);
    border-radius: 1rem;
    color: var(--color-primary-50);
    padding-left: 5rem;
  }

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

export const SidebarNavlink = styled(NavLink)`
  outline: none;
  border: none;
  font-weight: 400;
  padding: 2rem 3rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-primary-100);
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
      color: var(--color-primary-50);
      background: var(--color-primary-400);
      border-radius: 2rem;
    }
`;

function Sidebar({children}) {
  return (
    <StyledSidebar>
      {children}
    </StyledSidebar>
  );
}

export default Sidebar;

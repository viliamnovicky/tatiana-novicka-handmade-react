import styled from "styled-components";
import Button from "./Button";


const StyledSidebar = styled.aside`
  background-color: var(--color-grey-200);
  width: 50rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Button variation="adminSidebar">Pridať produkt</Button>
      <Button variation="adminSidebar">Aktualizovať produkt</Button>
      <Button variation="adminSidebar">Odstrániť produkt</Button>
      <Button variation="adminSidebar">Zmena hesla</Button>
      <Button variation="adminSidebar">Odhlásiť</Button>
    </StyledSidebar>
  );
}

export default Sidebar;

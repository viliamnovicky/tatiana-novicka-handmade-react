import styled from "styled-components";
import Button from "./Button";

const StyledManageButtons = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4.5rem;
  gap: 2rem;
`;

function ManageButtons() {
  return (
    <StyledManageButtons>
      <Button>Pridať Produkt</Button>
      <Button>Pridať Kategóriu</Button>
    </StyledManageButtons>
  );
}

export default ManageButtons;

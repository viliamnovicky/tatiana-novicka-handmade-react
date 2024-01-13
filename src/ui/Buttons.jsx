import styled from "styled-components";
import Button from "./Button";

const StyledButtons = styled.div`
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

function Buttons({children}) {
  return (
    <StyledButtons>
      {children}
    </StyledButtons>
  );
}

export default Buttons;

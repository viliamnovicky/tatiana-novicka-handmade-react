import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Spinner() {
  return (
    <StyledDiv>
      <PuffLoader color="#0e7490" size={150}/>
    </StyledDiv>
  );
}

export default Spinner;

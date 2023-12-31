import styled from "styled-components";

const StyledHomeContainer = styled.div`
  position: relative;
  height: 50rem;
  max-width: 95vw;
`;

const StyledImg = styled.img`
  height: 50rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function HomeContainer({ blob }) {
  return (
    <StyledHomeContainer>
      <StyledImg src={blob} alt="blob" />
    </StyledHomeContainer>
  );
}

export default HomeContainer;

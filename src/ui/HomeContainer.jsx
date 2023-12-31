import styled from "styled-components";

const StyledHomeContainer = styled.div`
  position: relative;
  height: 50rem;
  max-width: 95vw;
  background: var(--color--primary-50);
  overflow: hidden;

  &:hover img:first-child {
    transform: translate(-50%, -50%) scale(200%) rotate(90deg)
  }

  &:hover img:last-child {
    padding-right: 30rem;
  }
`;

const Blob = styled.img`
  height: 50rem;
  width: 50rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const HomeImage = styled.img`
  height: 45rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  padding-right: 20rem;
`;

function HomeContainer({ blob, image }) {
  return (
    <StyledHomeContainer>
      <Blob src={blob} alt="blob" />
      <HomeImage src={image}></HomeImage>
    </StyledHomeContainer>
  );
}

export default HomeContainer;

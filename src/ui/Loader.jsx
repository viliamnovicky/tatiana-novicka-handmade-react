import styled, { keyframes } from "styled-components";

const ScissorsAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Scissors = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid #000;
  animation: ${ScissorsAnimation} 1s linear infinite;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ScissorsLoader = () => (
  <LoaderContainer>
    <Scissors />
  </LoaderContainer>
);

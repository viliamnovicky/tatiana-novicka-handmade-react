import styled from "styled-components";
import HomeContainer from "../ui/HomeContainer";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh -24rem);
`;

function Home() {
  return (
    <StyledHome>
      <HomeContainer blob={"/blob-home-1.svg"} image={"/home-1.png"}/>
      <HomeContainer blob={"/blob-home-2.svg"} />
      <HomeContainer blob={"/blob-home-3.svg"} />
      <HomeContainer blob={"/blob-home-4.svg"} />
    </StyledHome>
  );
}

export default Home;

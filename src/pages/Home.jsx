import styled from "styled-components"
import HomeContainer from "../ui/HomeContainer"

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
`

function Home() {
    return (
        <StyledHome>
           <HomeContainer blob={"/blob-home-1.svg"}/>
           <HomeContainer blob={"/blob-home-2.svg"}/>
           <HomeContainer blob={"/blob-home-3.svg"}/>
           <HomeContainer blob={"/blob-home-4.svg"}/>
        </StyledHome>
    )
}

export default Home

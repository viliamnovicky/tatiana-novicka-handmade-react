import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  padding: 1rem 3rem;
  background-color: var(--color-primary-50);
  position: relative;
  overflow-x: auto;

  @media (max-width: 1365px) {
    padding: 0rem;
  }
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 12rem auto 8rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;

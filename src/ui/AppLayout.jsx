import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  padding: 1rem 3rem;
  overflow-x: hidden;
  background-color: var(--color-primary-50);
  position: relative;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  border-radius: 1rem;
  overflow: hidden;
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

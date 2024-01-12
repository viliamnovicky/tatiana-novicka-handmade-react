import { useState } from "react";
import styled from "styled-components";
import NewProduct from "../pages/NewProduct";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-100);
  border-radius: 2rem;
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  width: 80vw;
  height: 80vh;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  height: 4rem;
  width: 4rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-800);

  &:hover {
    background: var(--color-grey-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal() {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <Overlay>
      <StyledModal>
        <Button>✖</Button>
        <NewProduct/>
      </StyledModal>
    </Overlay>
  );
}

export default Modal;

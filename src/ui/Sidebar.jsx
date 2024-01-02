import styled from "styled-components";
import Button from "./Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

const StyledSidebar = styled.aside`
  width: 40rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;

  span {
    font-size: 3rem;
    transition: all 0.2s;
    color: var(--color-grey-600);

    &:hover {
      color: var(--color-grey-900);
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Button variation="adminSidebar">
        <span>
          <IoIosAddCircleOutline />
        </span>{" "}
        Pridať produkt
      </Button>
      <Button variation="adminSidebar">
        <span>
          <GrDocumentUpdate />
        </span>{" "}
        Aktualizovať produkt
      </Button>
      <Button variation="adminSidebar">
        <span>
          <MdDeleteOutline />
        </span>{" "}
        Odstrániť produkt
      </Button>
      <Button variation="adminSidebar">
        <span>
          <RiLockPasswordLine />
        </span>{" "}
        Zmena hesla
      </Button>
      <Button variation="adminSidebar">
        <span>
          <BiLogOutCircle />
        </span>{" "}
        Odhlásiť
      </Button>
    </StyledSidebar>
  );
}

export default Sidebar;

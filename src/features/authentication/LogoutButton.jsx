import { BiLogOutCircle } from "react-icons/bi";
import Button from "../../ui/Button";
import {useLogout} from "../authentication/useLogout"

function LogoutButton() {
    const {logout, isLoading} = useLogout()
  return (
    <Button variation="sidebar" onClick={logout} >
      <span>
        <BiLogOutCircle />
      </span>{" "}
      Odhlásiť
    </Button>
  );
}

export default LogoutButton;

import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { StyledNavbarActions } from "./styled";
import ButtonIcon from "@components/common/buttons/ButtonIcon";

const NavbarActions = () => {
  const actionButtons = [
    { id: 0, icon: <BsMessenger /> },
    { id: 1, icon: <IoMdNotifications /> },
    { id: 2, icon: <CgProfile /> },
  ];
  return (
    <StyledNavbarActions>
      {actionButtons.map((actionButton) => (
        <ButtonIcon key={actionButton.id}>{actionButton.icon}</ButtonIcon>
      ))}
    </StyledNavbarActions>
  );
};

export default NavbarActions;

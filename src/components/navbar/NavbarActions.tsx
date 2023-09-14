import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ButtonIcon } from "@components/common/buttons/ButtonIcon";
import { NavbarActionsContainer } from "./styled";

const NavbarActions = () => {
  const actionButtons = [
    { id: 0, icon: <BsMessenger /> },
    { id: 1, icon: <IoMdNotifications /> },
    { id: 2, icon: <CgProfile /> },
  ];
  return (
    <NavbarActionsContainer>
      {actionButtons.map((actionButton) => (
        <ButtonIcon key={actionButton.id}>{actionButton.icon}</ButtonIcon>
      ))}
    </NavbarActionsContainer>
  );
};

export default NavbarActions;

import { NavbarContainer } from "./NavbarStyled";
import NavbarSearch from "./NavbarSearch";
import NavbarActions from "./NavbarActions";
import NavbarNavigation from "./NavbarNavigation";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarSearch />
      <NavbarNavigation />
      <NavbarActions />
    </NavbarContainer>
  );
};

export default Navbar;

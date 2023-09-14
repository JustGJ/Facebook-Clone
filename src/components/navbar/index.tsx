import NavbarActions from "./NavbarActions";
import NavbarNavigation from "./NavbarNavigation";
import NavbarSearch from "./NavbarSearch";
import { NavbarContainer } from "./styled";

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

import NavbarActions from "./NavbarActions";
import NavbarNavigation from "./NavbarNavigation";
import NavbarSearch from "./NavbarSearch";
import { StyledNavbar } from "./styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarSearch />
      <NavbarNavigation />
      <NavbarActions />
    </StyledNavbar>
  );
};

export default Navbar;

import { useState } from "react";
import {
  ArrowButton,
  LogoFacebookButton,
  SearchContent,
  SearchInput,
  StyledNavbarSearch,
} from "./styled";
import { BsArrowLeft, BsFacebook } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import DropdownSearch from "@components/common/dropdowns/dropdownSearch";

const NavbarSearch = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  return (
    <StyledNavbarSearch>
      {isOpenSearch ? (
        <ArrowButton>
          <BsArrowLeft />
        </ArrowButton>
      ) : (
        <LogoFacebookButton>
          <BsFacebook />
        </LogoFacebookButton>
      )}
      <SearchContent>
        <AiOutlineSearch />
        <SearchInput
          onFocus={() => setIsOpenSearch(true)}
          type="text"
          placeholder="Rechercher sur Facebook"
        />
        <DropdownSearch
          isOpenSearch={isOpenSearch}
          setIsOpenSearch={setIsOpenSearch}
        />
      </SearchContent>
    </StyledNavbarSearch>
  );
};

export default NavbarSearch;

import { useState } from "react";
import {
  ArrowButton,
  LogoFacebookButton,
  NavbarSearchContainer,
  SearchContent,
  SearchInput,
} from "./styled";
import { BsArrowLeft, BsFacebook } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import DropdownSearch from "@components/common/dropdowns/dropdownSearch";

const NavbarSearch = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const renderSearchButton = () =>
    isOpenSearch ? (
      <ArrowButton>
        <BsArrowLeft />
      </ArrowButton>
    ) : (
      <LogoFacebookButton>
        <BsFacebook />
      </LogoFacebookButton>
    );

  return (
    <NavbarSearchContainer>
      {renderSearchButton()}
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
    </NavbarSearchContainer>
  );
};

export default NavbarSearch;

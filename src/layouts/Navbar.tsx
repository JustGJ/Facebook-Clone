import { useEffect, useRef, useState } from 'react';
import { BsFacebook, BsMessenger, BsArrowLeft } from 'react-icons/bs';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import DropdownSearch from '@components/ui/dropdowns/dropdownSearch';
import ButtonIcon from '@components/ui/Buttons/ButtonIcon';
import { ArrowButton, LogoFacebookButton, NavbarActions, NavbarContainer, NavbarSearch, NavigationButton, SearchContent, SearchInput } from './navbarStyled';

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const actionButtons = [
    { id: 0, icon: <BsMessenger /> },
    { id: 1, icon: <IoMdNotifications />},
    { id: 2, icon: <CgProfile />},
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(!searchRef.current?.contains(event.target as Node)) {
        setIsOpenSearch(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <NavbarContainer>
      <NavbarSearch>
        <ArrowButton $isOpenSearch={isOpenSearch}>
          <BsArrowLeft />
        </ArrowButton>
        <LogoFacebookButton $isOpenSearch={isOpenSearch}>
          <BsFacebook />
        </LogoFacebookButton>
          <SearchContent ref={searchRef} $isOpenSearch={isOpenSearch}>
          <AiOutlineSearch />
          <SearchInput onFocus={() => setIsOpenSearch(true)} type="text" placeholder="Rechercher sur Facebook" />
          { isOpenSearch && <DropdownSearch  /> }
        </SearchContent>
      </NavbarSearch>
      <NavigationButton>
        <AiFillHome />
      </NavigationButton>
      <NavbarActions>
        {actionButtons.map((actionButton) => (
          <ButtonIcon key={actionButton.id}>
            {actionButton.icon}
          </ButtonIcon>
        ))}
      </NavbarActions>
    </NavbarContainer>
  )
}

export default Navbar;
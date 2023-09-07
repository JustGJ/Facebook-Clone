import { BsFacebook, BsMessenger, BsArrowLeft } from 'react-icons/bs';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { useEffect, useRef, useState } from 'react';
import DropdownSearch from '@components/ui/dropdown/dropdownSearch/DropdownSearch';
import { isClassNameHidden } from '@utils/index';

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

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
    <nav className="navbar">
      <div className="navbar__search">
        <button className={isClassNameHidden(!isOpenSearch, 'navbar__arrow')}>
          <BsArrowLeft />
        </button>
        <button className={isClassNameHidden(isOpenSearch, 'navbar__fbLogo')}>
          <BsFacebook />
        </button>
        <div ref={searchRef} className="navbar__search__content">
          <AiOutlineSearch className={isClassNameHidden(isOpenSearch, "navbar__search-icon")} />
          <input onFocus={() => setIsOpenSearch(true)} className="navbar__search-input" type="text" placeholder="Rechercher sur Facebook" />
          <DropdownSearch isOpenSearch={isOpenSearch} />
        </div>
      </div>
      <button className="navbar__navigation">
        <AiFillHome />
      </button>
      <div className="navbar__actions">
        {actionButtons.map((actionButton) => (
          <button key={actionButton.id} className="navbar__actions-btn">
            {actionButton.icon}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
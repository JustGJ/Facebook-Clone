import styled from 'styled-components';
import { box, flexLayout } from '@styles/helpers';

export const NavbarContainer = styled.nav`
  ${flexLayout({ display: 'flex-center-vert'})}
  justify-content: space-between;
  height: 54px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 12%);
  background-color: ${({theme}) => theme.white};
  z-index: 2;
`
export const NavbarSearch = styled.div`
  ${flexLayout({ display: 'flex-center-vert'})}
  width: 360px;
  padding: 0 16px;
  z-index: 1;
`
export const LogoFacebookButton = styled.button<{ $isOpenSearch: boolean }>`
  ${flexLayout({ display: 'flex-center'})}

  svg {
    ${box("40px")};
    color: ${({theme}) => theme.facebook};
    border-radius: 50%;
  }
`;

export const ArrowButton = styled.button<{ $isOpenSearch: boolean }>`
 transform: translateX(4px);
 transition: .2s ease;
 color: ${({theme}) => theme.secondaryIcon};
 font-size: 1.2rem;
`
export const SearchContent = styled.div<{ $isOpenSearch: boolean }>`
  ${flexLayout({ display: 'flex-center-vert'})}
  ${box("240px", "40px")};
  background-color: ${({theme}) => theme.inputBg};
  margin-left: 11px;
  border-radius: 24px;
  font-size: 0.9rem;

svg {
  ${box("26px")};
  color: ${({theme}) => theme.secondaryIcon};;
  padding-left: 10px;
  transition: .2s ease-out;
}
`
export const SearchInput = styled.input`
  width: 100%;
  font-size: .9rem;
  padding: 12px 8px;

  &::placeholder {
    font-size: .9rem;
    color: ${({theme}) => theme.secondaryText};
  }
`
export const NavigationButton = styled.button`
  ${flexLayout({ display: 'flex-center'})}
  ${box("130px", "56px")};
  border-bottom: 3.5px solid ${({theme}) => theme.facebook};
  color: ${({theme}) => theme.facebook};

  svg {
    ${box("27px")};
  }
`
export const NavbarActions = styled.div`
  ${flexLayout({ display: 'flex-center-vert'})}
  justify-content: space-evenly;
  ${box("184px", "100%")};
`

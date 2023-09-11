import { box, flexLayout } from "@styles/helpers";
import styled from "styled-components";

export const StyledDropdownSearch = styled.div`
    position: absolute;
    ${box("327px", "517px")};
    top: 0;
    left: 0;
    padding: 50px 15px 15px 0;
    background-color:  ${({theme}) => theme.white};
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 12%);
    box-sizing: border-box;
    z-index: -1;
`
export const Title = styled.h3`
    color: ${({theme}) => theme.primaryText};
    padding-left: 1rem;
    margin: 16px 0 11px 0;
`
export const Item = styled.div`
    ${flexLayout({ display: 'flex-center-vert'})}
    ${box("300px", "48px")};
    padding: 8px 0px;
    margin-left: 9px;
    border-radius: 5px;
    transition: .3s ease-in-out;
    box-sizing: border-box;

    &:hover {
        background-color:  ${({theme}) => theme.textBgHover};
        cursor: pointer;
    }
`
export const PictureContent = styled.div`
    ${box("36px")};
    width: 36px;
    padding: 0px 15px 0 5px;
`
export const Picture = styled.img`
    ${box("100%")};
    border-radius: 50%;
`
export const Name = styled.span`
    color: ${({theme}) => theme.primaryText};
`
import { box, flexLayout } from "@styles/helpers";
import styled from "styled-components";

export const DropdownSearchContainer = styled.div`
  position: absolute;
  ${box("327px", "517px")};
  top: 0;
  left: 0;
  padding: 60px 15px 0px 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  z-index: -1;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.primaryText};
  padding-left: 1rem;
  margin: 16px 0 11px 0;
`;
export const Item = styled.div`
  ${flexLayout({ display: "flex-center-vert" })}
  ${box("300px", "50px")};
  padding: 8px 0px;
  margin-left: 9px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.textBgHover};
    cursor: pointer;
  }
`;

export const Picture = styled.img`
  ${box("36px")};
  border-radius: 50%;
  margin-right: 8px;
`;
export const Name = styled.span`
  color: ${({ theme }) => theme.primaryText};
`;

import { box, flexLayout } from "@styles/helpers";
import styled from "styled-components";

export const StyledButtonIcon = styled.button`
  ${flexLayout({ display: "flex-center" })}
  ${box("40px")};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.iconBg};
  color: ${({ theme }) => theme.primaryIcon};
  transition: 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.iconBgHover};
  }
  svg {
    ${box("18px")};
  }
`;

import styled from "styled-components";
import { box, flexLayout } from "@styles/helpers";

interface IButtonIconProps {
  children: React.ReactNode;
}

const StyledButtonIcon = styled.button`
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
const ButtonIcon = ({ children }: IButtonIconProps) => {
  return <StyledButtonIcon>{children}</StyledButtonIcon>;
};

export default ButtonIcon;

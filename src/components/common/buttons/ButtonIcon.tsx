import { StyledButtonIcon } from "./styled";

interface IButtonIconProps {
  children: React.ReactNode;
}
const ButtonIcon = ({ children }: IButtonIconProps) => {
  return <StyledButtonIcon>{children}</StyledButtonIcon>;
};

export default ButtonIcon;

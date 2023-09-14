import { box } from "@styles/helpers";
import styled from "styled-components";

export const ButtonProfileContainer = styled.button`
  ${box("40px")};
  border-radius: 50%;
  transition: 0.2s ease;
  overflow: hidden;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Picture = styled.img`
  ${box("100%")};
`;

interface IButtonProfileProps {
  src: string;
}
const ButtonProfile = ({ src }: IButtonProfileProps) => {
  return (
    <ButtonProfileContainer>
      <Picture src={src} alt="profile" />
    </ButtonProfileContainer>
  );
};

export default ButtonProfile;

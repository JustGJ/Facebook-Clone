import { Picture, StoryItemContainer } from "./styled";

interface IStoryItemProps {
  name?: string;
  avatar: string;
}
const StoryItem = ({ avatar }: IStoryItemProps) => {
  return (
    <StoryItemContainer>
      <Picture src={avatar} alt="picture story" />
    </StoryItemContainer>
  );
};

export default StoryItem;

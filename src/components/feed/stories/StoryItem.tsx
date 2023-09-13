import { StyledStoryItem } from "./styled";

interface IStoryItemProps {
  name?: string;
  avatar: string;
}
const StoryItem = ({ avatar }: IStoryItemProps) => {
  return (
    <StyledStoryItem>
      <img src={avatar} alt="" />
    </StyledStoryItem>
  );
};

export default StoryItem;

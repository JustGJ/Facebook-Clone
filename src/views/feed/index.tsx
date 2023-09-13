import Posts from "@components/feed/post";
import Stories from "@components/feed/stories";
import { StyledFeed } from "./styled";

const Feed = () => {
  return (
    <StyledFeed>
      <Stories />
      <Posts />
    </StyledFeed>
  );
};

export default Feed;

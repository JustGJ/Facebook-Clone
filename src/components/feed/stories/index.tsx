import StoryItem from "./StoryItem";
import { StyledStories } from "./styled";

const Stories = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Dali",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "John Doe",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "John Doe",
      avatar: "https://picsum.photos/200/300",
    },
  ];

  return (
    <StyledStories>
      {users.map((user) => (
        <StoryItem key={user.id} name={user.name} avatar={user.avatar} />
      ))}
    </StyledStories>
  );
};

export default Stories;

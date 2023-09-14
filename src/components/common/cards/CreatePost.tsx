import {
  CreatePostInput,
  PhotoVideoIcon,
  PhotoVideoButton,
  Text,
  CreatePostContainer,
  CreatePostHeader,
} from "./styled";
import { Divider } from "@components/common/Divider";
import ButtonProfile from "@components/common/buttons/ButtonProfile";

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <CreatePostHeader>
        <ButtonProfile src="https://picsum.photos/200/300" />
        <CreatePostInput type="text" placeholder="Quoi de neuf, Jeff ?" />
      </CreatePostHeader>
      <Divider />
      <PhotoVideoButton>
        <PhotoVideoIcon />
        <Text>Photo / vidéo</Text>
      </PhotoVideoButton>
    </CreatePostContainer>
  );
};

export default CreatePost;

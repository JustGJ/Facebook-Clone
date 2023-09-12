import { Item, Picture, PictureContent, Name } from "./DropdownSearchStyled";

interface DropdownSearchItemProps {
  key: number;
  name: string;
}

const DropdownSearchItem = ({ name }: DropdownSearchItemProps) => {
  return (
    <Item>
      <PictureContent>
        <Picture src="https://picsum.photos/200/300" alt="profile" />
      </PictureContent>
      <Name>{name}</Name>
    </Item>
  );
};

export default DropdownSearchItem;

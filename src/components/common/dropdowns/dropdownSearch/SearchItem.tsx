import { Item, Picture, Name } from "./styled";

interface DropdownSearchItemProps {
  key: number;
  name: string;
}

const DropdownSearchItem = ({ name }: DropdownSearchItemProps) => {
  return (
    <Item>
      <Picture src="https://picsum.photos/200/300" alt="profile" />
      <Name>{name}</Name>
    </Item>
  );
};

export default DropdownSearchItem;

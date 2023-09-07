interface DropdownSearchItemProps {
    key: number,
    name: string,
}

const DropdownSearchItem = ({ name }: DropdownSearchItemProps) => {

  return (
    <li className="dropdownSearchItem">
        <div className="dropdownSearchItem__picture">
            <img src="https://picsum.photos/200/300" alt="profile" />
        </div>
        <span>{name}</span>
    </li>
  )
}

export default DropdownSearchItem
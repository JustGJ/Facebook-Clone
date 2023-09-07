import { isClassNameHidden } from "../../../../utils";
import DropdownSearchItem from "./DropdownSearchItem";
import { useQuery } from "react-query";
import { useUserStore } from "../../../../business/useUserStore";
import { useEffect } from "react";

interface IDropdownSearchProps {
  isOpenSearch: boolean
}

const DropdownSearch = ({ isOpenSearch }: IDropdownSearchProps) => {
  const { users, setUsers } = useUserStore();
  const { data, isLoading, isError } = useQuery('users', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  })

  useEffect(() => {
    if(data) {
      setUsers(data)
    }
  }, [data, setUsers])

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>

  return (
    <div className={isClassNameHidden(!isOpenSearch, "dropdownSearch")}>
      <h3>Récent</h3>
      <ul>
        {users.map(((user) => (
          <DropdownSearchItem key={user.id} name={user.name} />
        )))}
      </ul>
    </div>
  )
}

export default DropdownSearch;
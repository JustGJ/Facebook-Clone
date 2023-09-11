import { useEffect } from "react";
import { useQuery } from "react-query";
import { useUserStore } from "@business/useUserStore";
import DropdownSearchItem from "./DropdownSearchItem";
import { StyledDropdownSearch, Title } from "./dropdownSearchStyled";

const DropdownSearch = () => {
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
    <StyledDropdownSearch>
      <Title>Récent</Title>
      <ul>
        {users.map(((user) => (
          <DropdownSearchItem key={user.id} name={user.name} />
        )))}
      </ul>
    </StyledDropdownSearch>
  )
}

export default DropdownSearch;
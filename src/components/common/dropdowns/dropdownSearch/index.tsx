import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useUserStore } from "@business/useUserStore";
import SearchItem from "./SearchItem";
import { StyledDropdownSearch, Title } from "./styled";
import Fade from "@components/common/Fade";

interface IDropdownSearchProps {
  setIsOpenSearch: (value: boolean) => void;
  isOpenSearch: boolean;
}

const DropdownSearch = ({
  setIsOpenSearch,
  isOpenSearch,
}: IDropdownSearchProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const { users, setUsers } = useUserStore();
  const { data, isLoading, isError } = useQuery("users", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsOpenSearch(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <Fade visible={isOpenSearch} duration={300} zIndex={-1}>
      <StyledDropdownSearch ref={searchRef}>
        <Title>Récent</Title>
        <ul>
          {users.slice(0, 8).map((user) => (
            <SearchItem key={user.id} name={user.name} />
          ))}
        </ul>
      </StyledDropdownSearch>
    </Fade>
  );
};

export default DropdownSearch;

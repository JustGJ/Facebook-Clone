import styled from "styled-components";

export const StyledStories = styled.div`
  display: flex;
  gap: 4px;
  height: 250px;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const StyledStoryItem = styled.div`
  width: 143px;
  background-color: red;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 2px 2px 2px rgb(0 0 0 / 12%);
  cursor: pointer;
`;

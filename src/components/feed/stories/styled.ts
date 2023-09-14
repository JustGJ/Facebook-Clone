import { box } from "@styles/helpers";
import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 250px;
  margin-bottom: 30px;
  gap: 4px;
`;

export const StoryItemContainer = styled.div`
  width: 143px;
  background-color: red;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 2px 2px 2px rgb(0 0 0 / 12%);
  cursor: pointer;
`;

export const Picture = styled.img`
  ${box("100%")};
`;

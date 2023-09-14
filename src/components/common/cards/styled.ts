import { flexLayout } from "@styles/helpers";
import { TbPhotoSearch } from "react-icons/tb";
import styled from "styled-components";

export const CreatePostContainer = styled.div`
  padding: 12px 16px 10px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 12%);
  background-color: ${({ theme }) => theme.white};
  box-sizing: border-box;
  border-radius: 8px;
`;

export const CreatePostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const CreatePostInput = styled.input`
  width: 600px;
  background-color: ${({ theme }) => theme.inputBg};
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 20px;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.inputBgHover};
  }
`;

export const PhotoVideoButton = styled.button`
  ${flexLayout({ display: "flex-center" })}
  width: 216px;
  margin: 0 auto;
  gap: 6px;
  padding: 8px;
  border-radius: 10px;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBgHover};
  }
`;

export const PhotoVideoIcon = styled(TbPhotoSearch)`
  color: #41b35d;
  font-size: 23px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-weight: bold;
`;

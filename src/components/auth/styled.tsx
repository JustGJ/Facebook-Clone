import { box } from "@styles/helpers";
import styled from "styled-components";

export const LoginFormContainer = styled.form`
  position: absolute;
  ${box("396px", "350px")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px 15px 24px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
export const LoginInput = styled.input`
  display: block;
  ${box("364px", "52px")};
  margin: 6px auto;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #dddfe2;
  outline: none;
  padding: 14px 16px;

  &:focus {
    border-color: #719ece;
  }
`;

export const DefaultButton = styled.button`
  display: block;
  color: #fff;
  font-weight: 600;
`;

export const LoginButton = styled(DefaultButton)`
  ${box("364px", "48px")};
  background-color: #007bff;
  padding: 10px 20px;
  margin: 10px auto;
  font-size: 17px;
  border-radius: 6px;
`;
export const ForgottenPassword = styled.span`
  display: block;
  text-align: center;
  margin-top: 16px;
`;

export const NewAccountButton = styled(DefaultButton)`
  ${box("216px", "48px")};
  background-color: #42b72a;
  margin: 0 auto;
  font-size: 15px;
  border-radius: 10px;

  &:hover {
    background-color: #36a420;
  }
`;

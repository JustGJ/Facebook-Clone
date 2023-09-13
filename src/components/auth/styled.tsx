import styled from "styled-components";

export const DefaultButton = styled.button`
  display: block;
  border: none;
  padding: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;
export const StyledLoginForm = styled.form`
  position: absolute;
  width: 396px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px 0 24px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
export const LoginInput = styled.input`
  display: block;
  margin: 6px auto;
  width: 364px;
  height: 52px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #dddfe2;
  outline: none;
  padding: 14px 16px;

  &:focus {
    border-color: #719ece;
  }
`;
export const LoginButton = styled(DefaultButton)`
  background-color: #007bff;
  padding: 10px 20px;
  width: 364px;
  height: 48px;
  margin: 10px auto;
  font-size: 17px;
  border-radius: 6px;
`;
export const ForgottenPassword = styled.span`
  display: block;
  text-align: center;
  margin-top: 16px;
`;
export const Separator = styled.div`
  width: 90%;
  height: 1px;
  background-color: #00000039;
  margin: 20px 16px;
`;
export const NewAccountButton = styled(DefaultButton)`
  background-color: #42b72a;
  width: 216px;
  height: 48px;
  margin: 0 auto;
  font-size: 15px;
  border-radius: 10px;

  &:hover {
    background-color: #36a420;
  }
`;

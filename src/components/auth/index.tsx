import {
  ForgottenPassword,
  LoginButton,
  LoginFormContainer,
  LoginInput,
  NewAccountButton,
} from "@components/auth/styled";
import { Divider } from "@components/common/Divider";

const Login = () => {
  return (
    <LoginFormContainer>
      <LoginInput type="text" name="email" placeholder="Adresse email" />
      <LoginInput type="text" name="password" placeholder="Mot de passe" />
      <LoginButton>Se connecter</LoginButton>
      <ForgottenPassword>Mot de passe oublié ?</ForgottenPassword>
      <Divider />
      <NewAccountButton>Créer nouveau compte</NewAccountButton>
    </LoginFormContainer>
  );
};

export default Login;

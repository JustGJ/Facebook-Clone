import {
  ForgottenPassword,
  LoginButton,
  StyledLoginForm,
  LoginInput,
  NewAccountButton,
  Separator,
} from "@components/auth/styled";

const Login = () => {
  return (
    <StyledLoginForm>
      <LoginInput type="text" name="email" placeholder="Adresse email" />
      <LoginInput type="text" name="password" placeholder="Mot de passe" />
      <LoginButton>Se connecter</LoginButton>
      <ForgottenPassword>Mot de passe oublié ?</ForgottenPassword>
      <Separator />
      <NewAccountButton>Créer nouveau compte</NewAccountButton>
    </StyledLoginForm>
  );
};

export default Login;

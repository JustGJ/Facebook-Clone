import { ForgottenPassword, LoginButton, LoginForm, LoginInput, NewAccountButton, Separator } from './LoginStyles.jsx';
const Login = () => {
  return (
    <LoginForm>
      <LoginInput type="text" name="email" placeholder="Adresse email" />
      <LoginInput type="text" name="password" placeholder="Mot de passe" />
      <LoginButton>Se connecter</LoginButton>
      <ForgottenPassword>Mot de passe oublié ?</ForgottenPassword>
      <Separator />
      <NewAccountButton>Créer nouveau compte</NewAccountButton>
    </LoginForm>
  );
};

export default Login;

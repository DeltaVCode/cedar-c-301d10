import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// https://auth0.com/docs/libraries/auth0-react#login
const LoginButton = () => {
  const auth0 = useAuth0();
  console.log(auth0);

  const { loginWithRedirect } = auth0; // special function called a 'hook'

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

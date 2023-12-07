"use client";
import '@aws-amplify/ui-react/styles.css';

import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { deleteCookies, getSingleCookie } from "@/lib/cookies";
import { userLoginApi } from "@/network/api/user";
const Login = ({signOut, user}: WithAuthenticatorProps) => {
  const handleLogin = async () => {
    const userCreds = {
      username: "kminchelle",
      password: "0lelplR",
    };
    await userLoginApi(userCreds);
    
    console.log("first");
  };
  // const user = getSingleCookie("auth");
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => deleteCookies("auth")}>Clear cookies</button>

    </>
  );
};

export default withAuthenticator(Login);

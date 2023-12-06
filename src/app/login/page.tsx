"use client";
import { useEffect, useState } from "react";

import { deleteCookies, getaCookie } from "@/lib/cookies";
import { userLoginApi } from "@/network/api/user";

const Login = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleLogin = async () => {
    const userCreds = {
      username: "kminchelle",
      password: "0lelplR",
    };
    await userLoginApi(userCreds);
    console.log("first");
  };
  const user: any = getaCookie("auth");
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => deleteCookies("auth")}>Clear cookies</button>

      {isClient && <h1>{user && JSON.parse(user).username}</h1>}
    </>
  );
};

export default Login;

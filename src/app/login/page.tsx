"use client";
import { deleteCookies, getSingleCookie } from "@/lib/cookies";
import { userLoginApi } from "@/network/api/user";

const Login = () => {
  const handleLogin = async () => {
    const userCreds = {
      username: "kminchelle",
      password: "0lelplR",
    };
    await userLoginApi(userCreds);
    console.log("first");
  };
  const user = getSingleCookie("auth");
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => deleteCookies("auth")}>Clear cookies</button>
    </>
  );
};

export default Login;

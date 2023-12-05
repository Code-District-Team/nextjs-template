"use client";
import { userLoginApi } from "@/network/api/user";

const Login = () => {
  const handleLogin = async () => {
    const userCreds = {
      username: "kminchelle",
      password: "0lelplR",
    };
    const user = await userLoginApi(userCreds);
    debugger;
    console.log("first");
  };
  return <button onClick={() => handleLogin()}>Login</button>;
};

export default Login;

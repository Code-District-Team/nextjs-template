import { setCookies } from "@/lib/cookies";
import { store } from "@/store";
import { setAuth } from "@/store/slices/auth";

import NetworkCall from "../networkCall";
import UserRequest from "../request/user";

export const userLoginApi = async (req: any) => {
  // reqBody: Record<string, any> | null
  try {
    const user = await NetworkCall.makeApiCall(UserRequest.userLogin(req));
    store.dispatch(setAuth(user || []));
    setCookies("auth", user);
    return user;
  } catch (error) {
    return error;
  }
};

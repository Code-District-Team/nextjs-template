import { cookieKeys } from '@/constants/cookiePreferences';
import { setCookies } from '@/lib/cookies';
import { store } from '@/store';
import { setAuth } from '@/store/slices/auth';

import NetworkCall from '../networkCall';
import UserRequest from '../requests/user';

export const userLoginApi = async (req: any) => {
  // reqBody: Record<string, any> | null
  try {
    const user = await NetworkCall.makeApiCall(UserRequest.userLogin(req));
    store.dispatch(setAuth(user || []));
    setCookies(cookieKeys.auth, user);
    return user;
  } catch (error) {
    return error;
  }
};

import { cookieKeys } from '@/constants/cookiePreferences';
import { setCookies } from '@/lib/cookies';
import { store } from '@/store';
import { setAuth } from '@/store/slices/auth';

import NetworkCall from '../networkCall';
import UserRequest from '../requests/user';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export const userLoginApi = async (req: {
  username: string;
  password: string;
}): Promise<User | Error> => {
  try {
    const user: User | null = await NetworkCall.makeApiCall(
      UserRequest.userLogin(req)
    );
    store.dispatch(setAuth(user as User));
    setCookies(cookieKeys.auth, user);
    return user as User;
  } catch (error) {
    return error as Error;
  }
};

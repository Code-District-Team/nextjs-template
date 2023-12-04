import { AuthError } from "@aws-amplify/auth/lib/Errors";
import { Auth } from "aws-amplify";
import Router from "next/router";
import useSWR from "swr";

import { InputInitialInformation } from "@/components/Registration/types";
import { LOGIN_PATH, SignInErrors } from "@/constants";
import { createAccount } from "@/lib/account";
import { CustomError } from "@/types/http";
import {
  Business,
  BusinessAddress,
  BusinessAddressType,
  Contact,
  User,
} from "@/types/models";

/**
 * Registration function
 * @param data
 */
export async function signup(data: any) {
  const accountData: Contact = {
    country: data.memberCountry,
    email: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    membershipType: data.membershipType,
    opsNotificationConsent: data.opsNotificationConsent,
    password: data.password,
    phonenumber: data.phonenumber,
    phoneprefix: data.phoneprefix,
    province: data.memberProvince,
    title: data.title,
    username: data.username,
  };

  let signupPayload = { ...accountData };

  // If company data exists then create business
  if (data.companyName) {
    const businessData: Partial<Business & BusinessAddress> = {
      address1: data.address1,
      addressType: BusinessAddressType.REG,
      addressZip: data.zip,
      city: data.city,
      company: data.companyName,
      country: data.country,
      province: data.province,
      region: data.region,
      subRegion: data.subRegion,
      unit: data.companyDivision,
    };
    signupPayload = { ...signupPayload, business: businessData as Business };
  }

  const response = await createAccount(signupPayload);
  return response;
}

export async function login(
  username: string,
  password: string,
  redirect = "/",
) {
  try {
    await Auth.signIn(username, password);
    if (redirect) Router.push(redirect);
    return { success: true };
  } catch (error) {
    const auth_error = error as AuthError;

    if (
      [SignInErrors.INACTIVE_USER, SignInErrors.USER_NOT_CONFIRMED].includes(
        auth_error.message,
      )
    ) {
      return {
        error: SignInErrors.INACTIVE_USER,
        success: false,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function resendConfirmation(email: string) {
  try {
    await Auth.resendSignUp(email);
    return true;
  } catch (error) {
    console.log("error resending code: ", error);
    return false;
  }
}

export async function confirmEmail(email: string, code: string) {
  try {
    await Auth.confirmSignUp(email, code);
    return true;
  } catch (error) {
    console.log("Confirmation failed");
    return false;
  }
}

export async function getToken() {
  try {
    const session = await Auth.currentSession();
    return session.getAccessToken().getJwtToken();
  } catch (error) {
    return "";
  }
}

/**
 * Return ID token from session which contains the claims as well
 */
export async function getIdToken() {
  try {
    const session = await Auth.currentSession();
    return session.getIdToken().getJwtToken();
  } catch (error) {
    return "";
  }
}

export function useUser() {
  const { data, error } = useSWR("user", () =>
    Auth.currentSession().then((user) => {
      if (user === null) throw new Error("Not Logged in");
      return user.getIdToken().payload as User;
    }),
  );

  return {
    currentUser: data,
    error,
    loading: !data && !error,
  };
}

export async function updateUserCustomerID(customerId: string) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    Auth.updateUserAttributes(user, { customerId });
    return true;
  } catch (error) {
    console.log("update user failed", error);
    return false;
  }
}

export async function logout() {
  await Auth.signOut();
  document.location.href = LOGIN_PATH;
}

/**
 * Updates cognito user password
 */
export async function updatePassword(oldPassword: string, newPassword: string) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.changePassword(user, oldPassword, newPassword);
    return { success: true };
  } catch (e: any) {
    throw new CustomError(e.message, e);
  }
}
export async function createBraintreeCustomer(data: InputInitialInformation) {
  // Call NextJs API
  const response = await fetch("/api/braintree/customer", {
    body: JSON.stringify(data),
    method: "POST",
  });
  const responseJson = await response.json();
  return responseJson.customerId;
}

/**
 * Forgot/Reset password
 */
export async function forgotPassword(email: string) {
  try {
    await Auth.forgotPassword(email);
    return true;
  } catch (e: any) {
    console.log("Forgot password failed ", e);
    return false;
  }
}

export async function forgotPasswordSubmit(
  email: string,
  code: string,
  password: string,
) {
  try {
    await Auth.forgotPasswordSubmit(email, code, password);
    return true;
  } catch (e: any) {
    console.log("Reset password failed ", e);
    return false;
  }
}

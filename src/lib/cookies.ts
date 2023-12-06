import {
  deleteCookie,
  getCookie,
  getCookies,
  hasCookie,
  setCookie,
} from "cookies-next";

export const setCookies = (name: string, data: any) => {
  setCookie(name, data);
};

export const getSingleCookie = (name: string) => {
  return getCookie(name);
};

export const getAllCookies = () => {
  return getCookies();
};

export const hasCookies = (name: string) => {
  hasCookie(name);
};

export const deleteCookies = async (name: string) => {
  deleteCookie(name);
};

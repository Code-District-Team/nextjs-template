import { cookieKeys } from "@/constants/cookiePreferences";
import { getSingleCookie } from "@/lib/cookies";

import K from "../../constants";

export default class Request {
  url: string = "";
  method: string = "";
  body: any;
  headers: any;

  constructor(
    relativeURL: string,
    method = K.Network.Method.GET,
    body = null,
    defaultHeaderType = K.Network.Header.Type.Json,
    headers = {},
    token = null,
  ) {
    const user: any = getSingleCookie(cookieKeys.auth);
    let bearerToken = user ? JSON.parse(user)?.token : "";
    headers = {
      ...(defaultHeaderType === K.Network.Header.Type.Json ||
      defaultHeaderType === K.Network.Header.Type.formData
        ? K.Network.Header.Default(bearerToken)
        : K.Network.Header.Authorization()),
      ...headers,
    };
    this.url = relativeURL;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }
}

import K from "../../constants";
import Request from ".";
import { store } from "../../store";

export default class PostRequest extends Request {
  constructor(params: any) {
    super(params);
  }

  // Define request functions below.

  static getAllPosts() {
    let state = store.getState();
    // const { auth } = state;

    return new Request(
      K.Network.URL.posts,
      K.Network.Method.GET,
      null,
      K.Network.Header.Type.Json,
      {}
      // auth.loggedInUser?.token
    );
  }
}

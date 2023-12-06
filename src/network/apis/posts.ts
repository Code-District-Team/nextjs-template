import NetworkCall from "../networkCall";
import PostRequest from "../requests/posts";

export const getPostsApi = async () => {
  // reqBody: Record<string, any> | null
  try {
    const posts = await NetworkCall.makeApiCall(PostRequest.getAllPosts());
    //   store.dispatch(setPosts(posts || []));

    return posts;
  } catch (error) {
    return error;
  }
};

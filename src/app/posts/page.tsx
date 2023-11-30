"use client";

import { getPostsApi } from "@/network/api/test";
import { useEffect, useState } from "react";

const FakePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await getPostsApi();
      setPosts(res);
    };
    fetchData();
    console.log("12");
  }, []);
  console.log("1");
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <div>{post.title}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FakePosts;

import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

function Blog() {
  const [post, setPost] = useState();
  const GET_POST = gql`
    query {
      post(id: "1") {
        title
        content
      }
    }
  `;
  const { data } = useQuery(GET_POST);

  useEffect(() => {
    if (!data) return;
    setPost(data.post);
  }, [data]);

  return (
    <section>
      <section-title>{post && post.title}</section-title>
      <p>{post && post.content.substring(0, 110)}&#8230;</p>
      <button>
        <a href="/blog">Read Blog</a>
      </button>
    </section>
  );
}

export default Blog;

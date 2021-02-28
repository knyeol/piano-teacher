import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET_POSTS } from "../../apollo/";
import { useLazyQuery } from "@apollo/client";
import Card from "../../components/Card";

function Posts() {
  const increment = 5;
  const [posts, setPosts] = useState();
  const [getPosts, { data }] = useLazyQuery(GET_POSTS);
  const [scroll, setScroll] = useState(0);
  const location = useLocation().pathname;

  function updateScroll() {
    return document.body.scrollHeight - (window.screen.height + window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(updateScroll()));
    getPosts({ variables: { limit: increment } });
  }, []);

  useEffect(() => {
    if (!data || scroll > 0) return;
    getPosts({ variables: { limit: data.posts.length + increment } });
    setScroll(updateScroll());
    setPosts(data.posts);
  }, [data, scroll]);

  return (
    <section>
      <section-title>Blog Posts</section-title>
      {posts &&
        posts.map(post => {
          const postLocation = `${location}/${post.slug}`;
          return (
            <Card
              key={post.id}
              title={post.title}
              location={postLocation}
              content={post.content}
              imageSrc={post.image.url}
            />
          );
        })}
    </section>
  );
}

export default Posts;

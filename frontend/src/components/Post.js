import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../apollo/";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Post({ id }) {
  const [content, setContent] = useState();
  const { loading, error, data } = useQuery(GET_POST(id));

  function formatDate(date) {
    const [year, month, day] = date.split("-");
    const newDate = new Date(year, month - 1, day);
    const format = {
      year: "numeric",
      month: "long",
      day: "2-digit"
    };
    return Intl.DateTimeFormat("en-US", format).format(newDate);
  }

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (!data) return;
    setContent(data.post.content.split("\n"));
  }, [data]);

  return (
    <content-container>
      {data && (
        <>
          <section-title>{data.post.title}</section-title>
          {formatDate(data.post.created_at.split("T")[0])}
          <img
            is="lazyload-image"
            src={`${data.post.image.url}`}
            alt="piano"
            height={data.post.image.url.height}
            width={data.post.image.url.width}
          />
          {content &&
            content.map(
              (content, i) =>
                content && <blog-paragraph key={i}>{content}</blog-paragraph>
            )}
          <card-title>
            <a href="/blog">
              <FaLongArrowAltLeft />
              &ensp;Return
            </a>
          </card-title>
        </>
      )}
    </content-container>
  );
}

export default Post;

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Card({ title, location, content, imageSrc }) {
  const trimmedContent = `${content.substring(0, 80)}…`;

  return (
    <card-container>
      <card-image>
        <img is="lazyload-image" src={imageSrc} alt="piano" />
      </card-image>
      <card-text>
        <card-title>
          <a href={location}>
            <FaLongArrowAltRight />
            &ensp;{title}
          </a>
        </card-title>
        <card-content>{trimmedContent}</card-content>
      </card-text>
    </card-container>
  );
}

export default Card;

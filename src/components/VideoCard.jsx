import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, publishedAt, thumbnails, channelTitle } = video.snippet;

  return (
    <Link to={`/videos/watch/${video.id}`} state={{ video }}>
      <li>
        <img src={thumbnails.default.url} alt={title} />
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{publishedAt}</p>
      </li>
    </Link>
  );
}

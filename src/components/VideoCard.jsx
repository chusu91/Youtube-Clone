import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, publishedAt, thumbnails, channelTitle } = video.snippet;
  const isList = type === "list";

  return (
    <Link to={`/videos/watch/${video.id}`} state={{ video }}>
      <li className={isList ? "flex gap-1 m-2" : ""}>
        <img
          className={isList ? "w-60 mr-2" : "w-full"}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{publishedAt}</p>
        </div>
      </li>
    </Link>
  );
}

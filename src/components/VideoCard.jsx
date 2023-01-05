import moment from "moment";
import React from "react";

export default function VideoCard({ video }) {
  const { title, channelTitle, publishedAt } = video;
  return (
    <li>
      <img src={video.thumbnails.default.url} alt="thumbnails" />
      <h3>{title}</h3>
      <p>{channelTitle}</p>
      <p>{moment(publishedAt).fromNow()}</p>
    </li>
  );
}

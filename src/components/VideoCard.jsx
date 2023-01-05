import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ id, video }) {
  const { title, channelTitle, publishedAt } = video;
  //   const handleClick = () => {
  //     handleVideoClick(id);
  //   };
  return (
    <Link to={`/${id}`}>
      <li>
        <img src={video.thumbnails.default.url} alt="thumbnails" />
        <h3>{title}</h3>
        <p>{channelTitle}</p>
        <p>{moment(publishedAt).fromNow()}</p>
      </li>
    </Link>
  );
}

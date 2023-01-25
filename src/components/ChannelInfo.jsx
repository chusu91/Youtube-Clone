import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/youtubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImgURL(id));

  return (
    <div>
      <img src={url} alt={name} />
      {name}
    </div>
  );
}

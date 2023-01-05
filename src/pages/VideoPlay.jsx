import React from "react";
import { useParams } from "react-router-dom";

export default function VideoPlay() {
  const { videoId } = useParams();
  return <div>play video id:{videoId}</div>;
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { FakeYoutube } from "../api/fakeYoutube";
import { search, Youtube } from "../api/youtube";
import VideoCard from "../components/VideoCard";
import Error from "./Error";

export default function Videos() {
  const { keyword } = useParams();
  const youtube = new FakeYoutube();
  //const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>is Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

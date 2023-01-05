import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const { isLoading, error, data } = useQuery(["popular"], async () => {
    const res = await fetch("data/most_popular.json");
    return await res.json();
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // const handleVideoClick = (id) => {
  //   console.log(id);
  //   //Navigate(`/${id}`);
  // };

  return (
    <ul>
      {data.items.map((video) => (
        <VideoCard
          key={video.id}
          video={video.snippet}
          id={video.id}
          //handleVideoClick={handleVideoClick}
        />
      ))}
    </ul>
  );
}

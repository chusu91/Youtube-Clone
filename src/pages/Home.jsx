import { useQuery } from "@tanstack/react-query";
import React from "react";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const { isLoading, error, data } = useQuery(["popular"], async () => {
    const res = await fetch("data/most_popular.json");
    return await res.json();
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.items.map((video) => (
        <VideoCard key={video.id} video={video.snippet} />
      ))}
    </ul>
  );
}

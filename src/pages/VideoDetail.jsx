import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, description, channelTitle } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        ></iframe>
        <h1>{title}</h1>
        <ChannelInfo id={video.id} name={channelTitle} />
        <pre>{description}</pre>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

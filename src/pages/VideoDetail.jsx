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
    <section className="flex flex-col lg:flex-row">
      <article className="basis-5/6">
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
          title={title}
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={video.id} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos className="basis-1/6" id={video.id} />
      </section>
    </section>
  );
}

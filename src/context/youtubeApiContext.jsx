import { useContext } from "react";
import { createContext } from "react";
import { Youtube } from "../api/youtube";
import { YoutubeClient } from "../api/youtubeClient";

export const youtubeApiContext = createContext();
const client = new YoutubeClient();
//const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <youtubeApiContext.Provider value={{ youtube }}>
      {children}
    </youtubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(youtubeApiContext);
}

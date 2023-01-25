import { useContext } from "react";
import { createContext } from "react";
import { FakeYoutube } from "../api/fakeYoutube";
import { Youtube } from "../api/youtube";

export const youtubeApiContext = createContext();

const youtube = new FakeYoutube();

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

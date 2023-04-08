import React, { useState, useEffect } from "react";
import { Playlist, PlaylistItem } from "./types";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLFCgv3qvf3d1JHUOs8375ltdtCKF-Z6SH&key=AIzaSyBbEL1qznpMIVQiJQym68uZRt-45JqfqJI";

export async function getYtVideos(): Promise<PlaylistItem[]> {
  const res = await fetch(YOUTUBE_PLAYLIST_ITEMS_API);
  const data = await res.json();
  return data.items;
}

const App = () => {
  const [videos, setVideos] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = await getYtVideos();
      setVideos(data);
    }
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>App Component</h1>
      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.snippet.title}</h2>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <p>{video.snippet.description}</p>
          <iframe
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default App;

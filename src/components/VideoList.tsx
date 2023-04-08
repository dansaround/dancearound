import React from "react";
import { videos } from "../data/data";

interface Videos {
  downloadUrl: string;
  shareUrl: string;
  title: string;
  videoId: string;
  watchUrl: string;
}

interface Props {
  videos: Videos[];
}

const VideoList: React.FC<Props> = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <div key={index}>
          <h3>{video.title}</h3>
          <p>{video.watchUrl}</p>

          <p>{video.downloadUrl}</p>
          <p>{video.shareUrl}</p>
          <p>{video.videoId}</p>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
}

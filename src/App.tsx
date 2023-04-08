import React from "react";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <h1>App Component</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLFCgv3qvf3d1JHUOs8375ltdtCKF-Z6SH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default App;

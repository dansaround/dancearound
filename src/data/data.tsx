import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export interface Video {
  downloadUrl: string;
  shareUrl: string;
  title: string;
  videoId: string;
  watchUrl: string;
}

export const videos = [
  {
    title: "Pareja On 1 | Avanzado | Leiton (4)",
    videoId: "0N-EmgBZEso",
    watchUrl: "https://youtube.com/shorts/0N-EmgBZEso",
    shareUrl: "https://youtube.com/shorts/0N-EmgBZEso?feature=share",
    downloadUrl:
      "/download_my_video?v=0N-EmgBZEso&t=QUFFLUhqbEZpRHNUSDgzMUU0YUFNbWkxWGNvOGppN3lLZ3xBQ3Jtc0trazliZmd4YkltQW1INHkzUU92eGl1NldCSG5YOUxVUDkwR0hMSG1ETjBFcURzVEFlRjFWaURkdF9jODRCNWJxQlVlTzdoOWVFLTh1eW4wOWY2U3VJclk1eG54RndZY2NGT3FCdWtrZkREd3RtcXEzNA%3D%3D&wm=1",
  },
  {
    title: "Pareja On 1 | Avanzado | Leiton (6)",
    videoId: "0XwcJ3KLy7w",
    watchUrl: "https://youtube.com/shorts/0XwcJ3KLy7w",
    shareUrl: "https://youtube.com/shorts/0XwcJ3KLy7w?feature=share",
    downloadUrl:
      "/download_my_video?v=0XwcJ3KLy7w&t=QUFFLUhqa09YZGh4XzZfTVV0aW82WE1GdGpwZU1uTDc5Z3xBQ3Jtc0tsaWV0amRld0s0eE0wWGs5NnZvbjlOWGNYU1FreXgyblVzVkktZTZpbEQ4Y292cWVrYVR3NEw2LVZPMWdUb1FZbGN0dHVfUTViRDktOE9UbmZBMUZXRmI0NU9NeHNJbVBCYjBWRzh1R1ZXZDQxVk05MA%3D%3D&wm=1",
  },
  {
    title: "Pareja On 1 | Básico | Frank (1)",
    videoId: "0vxzbf4eqRU",
    watchUrl: "https://youtube.com/shorts/0vxzbf4eqRU",
    shareUrl: "https://youtube.com/shorts/0vxzbf4eqRU?feature=share",
    downloadUrl:
      "/download_my_video?v=0vxzbf4eqRU&t=QUFFLUhqbVdJTVhqN3VDQWpBaHVUYzZDbnpTZ1ByNjhEZ3xBQ3Jtc0tsMFg4RDFkYURKN000SjhsRkF4dl9CUWdTMDhwdmpGTjl2Mjh4cENPbzZJOFREUmhoYk5aeHhZaVJpOEl2cExlSXBDSzdTSTVqNUQ5ajhMS3Ntbnl1UUZGZkhhMzZtXzNwNC1tOVVteVNJRDl2YWFiVQ%3D%3D&wm=1",
  },
];

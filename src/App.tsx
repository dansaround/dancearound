import React, { useState, useEffect } from "react";
import { Playlist, PlaylistItem } from "./types";
import "../src/styles/app.css";

/* PARTE DEL API */
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLFCgv3qvf3d1JHUOs8375ltdtCKF-Z6SH&key=AIzaSyBbEL1qznpMIVQiJQym68uZRt-45JqfqJI";

export async function getYtVideos(): Promise<PlaylistItem[]> {
  const res = await fetch(YOUTUBE_PLAYLIST_ITEMS_API);
  const data = await res.json();
  return data.items;
}
/* FIN DEL API */

const App = () => {
  const [videos, setVideos] = useState<PlaylistItem[]>([]);
  const [genreFilter, setGenreFilter] = useState<string>("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("");

  useEffect(() => {
    async function fetchVideos() {
      const data = await getYtVideos();
      setVideos(data);
    }
    fetchVideos();
  }, []);

  /* FILTROS */
  const handleGenreFilter = (genre: string) => {
    setGenreFilter(genre);
    setDifficultyFilter("");
  };

  const handleDifficultyFilter = (difficulty: string) => {
    setDifficultyFilter(difficulty);
    setGenreFilter("");
  };

  const filteredVideos = videos.filter((video) => {
    if (genreFilter !== "" && !video.snippet.title.includes(genreFilter)) {
      return false;
    }
    if (
      difficultyFilter !== "" &&
      !video.snippet.title.includes(difficultyFilter)
    ) {
      return false;
    }
    return true;
  });
  /* FIN DE FILTROS */

  return (
    <div>
      <h1>Dance Around</h1>
      <div className="text_container">
        <p>
          Proyecto personal, biblioteca de los vídeos que he coleccionado a lo
          largo mi proceso en el mundo del baile. Disfruten.
        </p>
        <p>- Daniel K🤓</p>
      </div>

      <div className="filtros_container">
        <div className="filtros">
          <h2>Género:</h2>
          <button onClick={() => handleGenreFilter("Bachata")}>Bachata</button>
          <button onClick={() => handleGenreFilter("On 1")}>Salsa On 1</button>
          <button onClick={() => handleGenreFilter("On 2")}>Mambo</button>
        </div>
        <div className="filtros">
          <h2>Dificultad:</h2>
          <button onClick={() => handleDifficultyFilter("Básico")}>
            Básico
          </button>
          <button onClick={() => handleDifficultyFilter("Intermedio")}>
            Intermedio
          </button>
          <button onClick={() => handleDifficultyFilter("Avanzado")}>
            Avanzado
          </button>
        </div>
      </div>
      <ul className="grid">
        {filteredVideos.map((video) => (
          <li className="card" key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{video.snippet.title}</h2>
              <img
                src={video.snippet.thumbnails.high.url}
                alt="video thumbnail"
              />
            </a>
            {/* <iframe
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            title={video.snippet.title}
          ></iframe> */}
          </li>
        ))}
      </ul>
      <p className="quote">
        "Bailar es algo que no puede ser explicado con palabras, es algo que
        tiene que ser bailado" - El Autor
      </p>
    </div>
  );
};

export default App;

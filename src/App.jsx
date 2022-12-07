import { useState, useEffect } from "react";
import "./App.css";
import "./styles/style.scss";
import { Search } from "./assets/search-icon";
import MovieCard from "./MovieCard";
import { searchMovies } from "./fetchFromApi";

const searchUrl = `data:image/svg+xml;utf8,${encodeURIComponent(Search)}`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const fetchMovies = async (searchTerm) => {
    setMovies(await searchMovies(searchTerm));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchUrl}
          alt="search"
          onClick={() => fetchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;

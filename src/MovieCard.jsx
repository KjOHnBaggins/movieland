import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="">
        <p>
          {!movie.releaseYear
            ? "Release date: Unknown"
            : movie.releaseYear.year}
        </p>
      </div>
      <div className="">
        <img
          src={
            !movie.primaryImage
              ? "https://picsum.photos/seed/picsum/400"
              : movie.primaryImage.url
          }
          alt={movie.titleText.text}
        />
      </div>

      <div className="">
        <span>{movie.titleType.text}</span>
        <h3>{movie.titleText.text}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

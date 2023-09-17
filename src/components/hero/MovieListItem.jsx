import React from "react";
import { Link } from "react-router-dom";

export default function MovieListItem({ movie }) {
  return (
    <li>
      <Link data-link="link" to={`movie/${movie?.id}`}>
        <div className="movie-list-item flex gap-1 align-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            data-testid="movie-poster"
            alt={movie?.title}
            width={30}
            height={50}
          />
          <div className="white">
            <span data-testid="movie-title">{movie.title}</span>{' '}
            <span data-testid="movie-release-date">({movie.release_date.split("-")[0]})</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

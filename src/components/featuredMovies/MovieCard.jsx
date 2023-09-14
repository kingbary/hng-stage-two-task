import { useEffect, useRef } from "react";
import { heartIcon, imdbIcon, cherryIcon } from "../../assets/icons";
import Svg from "../Svg";
import styles from "./featuredMovies.module.css";

function MovieCard({ movie }) {
  const posterRef = useRef(null);
  useEffect(() => {
    posterRef.current?.style.setProperty(
      "--background-img",
      `url(https://image.tmdb.org/t/p/w500/${movie?.poster_path})`
    );
  }, [movie?.poster_path]);
  return (
    <div className={`f-column ${styles.movie_card}`}>
      <div ref={posterRef} className={styles.poster_container}>
        <div className={`flex align-center space-between pad-1`}>
          <div className={`sm-text no-wrap ${styles.series}`}>TV SERIES</div>
          <div
            className={`flex align-center justify-center ${styles.heart_con}`}
          >
            <Svg src={heartIcon} width={"20px"} height={"20px"} />
          </div>
        </div>
      </div>
      <p className="sm-text gray400 fw-600">USA, {movie.release_date.split('-')[0]} - Current</p>
      <p className={`fw-700 ${styles.movie_title}`}>{movie?.title}</p>

      <div className="flex space-between">
        <div className="flex align-center gap-05">
          <img alt="imdb logo" src={imdbIcon} width={"35px"} height={"17px"} />
          <p className="sm-text">{movie?.vote_average * 10}/100</p>
        </div>
        <div className="flex align-center gap-05">
          <img src={cherryIcon} width={"16px"} height={"17px"} />
          <p className="sm-text">{Math.ceil(movie?.popularity)}%</p>
        </div>
      </div>
      <p className="sm-text gray400 fw-600">Action, Adventure, Horror</p>
    </div>
  );
}

export default MovieCard;

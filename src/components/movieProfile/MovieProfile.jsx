import { useEffect, useRef } from "react";
import { playIcon2 } from "../../assets/icons";
import MovieInfo from "./MovieInfo";
import styles from "./movieProfile.module.css";

function MovieProfile({ movie, movieCredit }) {
  const movieBgRef = useRef(null);

  useEffect(() => {
    movieBgRef.current?.style.setProperty(
      "--background-img",
      `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path ?? ""})`
    );
  }, [movie]);

  return (
    <section className={`f-column gap-1 pad-3 ${styles.movieProfile}`}>
      <div ref={movieBgRef} className={`${styles.movieImgCard}`}>
        <div className="f-column align-center">
          <button
            className={`flex align-center justify-center ${styles.playIcon_btn}`}
          >
            <img src={playIcon2} width={"52px"} height={"52px"} />
          </button>
          <p className="white fw-400 md-text-24 no-wrap">Watch Trailer</p>
        </div>
      </div>
      <MovieInfo movie={movie} movieCredit={movieCredit} />
    </section>
  );
}

export default MovieProfile;

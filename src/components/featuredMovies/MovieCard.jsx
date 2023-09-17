import { useState } from "react";
import { heartIcon, imdbIcon, cherryIcon } from "../../assets/icons";
import Svg from "../Svg";
import styles from "./featuredMovies.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MovieCard({ movie }) {
  // const posterRef = useRef(null);
  // useEffect(() => {
  //   posterRef.current?.style.setProperty(
  //     "--background-img",
  //     `url(https://image.tmdb.org/t/p/w500/${movie?.poster_path})`
  //   );
  // }, [movie]);

  const [saveFavorite, setSaveFavorite] = useState(false);

  const handleSaveFav = (e) => {
    e.preventDefault();
    toast.success(`${movie?.title} has been saved successfuly`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setSaveFavorite(!saveFavorite);
  };

  return (
    <div data-testid="movie-card">
      <Link
        to={`movie/${movie?.id}`}
        className={`f-column ${styles.movie_card}`}
      >
        <div className={styles.poster_container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            data-testid="movie-poster"
            alt="movie poster"
          />
          <div
            className={`flex align-center space-between pad-1 ${styles.icon_container}`}
          >
            <div className={`sm-text no-wrap ${styles.series}`}>TV SERIES</div>
            <button
              onClick={handleSaveFav}
              className={`flex align-center justify-center ${styles.heart_con}`}
              style={{
                backgroundColor: saveFavorite
                  ? "var(--rose700)"
                  : "var(--transparent)",
              }}
            >
              <Svg
                className={styles.heartIcon}
                src={heartIcon}
                width={"20px"}
                height={"20px"}
              />
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <p className="sm-text gray400 fw-600">
          USA,{" "}
          <span data-testid="movie-release-date">
            {/* {movie.release_date.split("-")[0]} */}
            {movie.release_date}
          </span>{" "}
          - Current
        </p>
        <p className={`fw-700 ${styles.movie_title}`} data-testid="movie-title">
          {movie?.title}
        </p>
        <div className="flex space-between">
          <div className="flex align-center gap-05">
            <img
              alt="imdb logo"
              src={imdbIcon}
              width={"35px"}
              height={"17px"}
            />
            <p className="sm-text">{movie?.vote_average * 10}/100</p>
          </div>
          <div className="flex align-center gap-05">
            <img src={cherryIcon} width={"16px"} height={"17px"} />
            <p className="sm-text">{Math.ceil(movie?.popularity)}%</p>
          </div>
        </div>
        <p className="sm-text gray400 fw-600">genre</p>
        {/* {genres?.genres.map((genre) => {
          return <p className="sm-text gray400 fw-600">{genre}</p>;
        })} */}
      </Link>
    </div>
  );
}

export default MovieCard;

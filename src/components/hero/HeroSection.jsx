import styles from "./hero.module.css";
import { Link } from "react-router-dom";
import { imdbIcon, cherryIcon, playIcon } from "../../assets/icons";
import Svg from "../Svg";
import { useEffect, useRef } from "react";

function HeroSection({ movie }) {
  const bgImgRef = useRef(null);
  useEffect(() => {
    bgImgRef.current?.style.setProperty(
      "--background-img",
      `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
    );
  }, [movie?.backdrop_path]);
  return (
    <section ref={bgImgRef} className={styles.header}>
      <div className="container">
        <div className={`f-column gap-1 ${styles.hero_content}`}>
          <h1 className={`${styles.movie_title}`}>{movie?.title}</h1>
          <div className="flex gap-25">
            <div className="flex align-center gap-05">
              <img
                src={imdbIcon}
                width={"35px"}
                height={"17px"}
                alt="imdb logo"
              />
              <p className="sm-text">{movie?.vote_average * 10}/100</p>
            </div>
            <div className="flex align-center gap-05">
              <img
                src={cherryIcon}
                width={"16px"}
                height={"17px"}
                alt="cherry icon"
              />
              <p className="sm-text">{Math.ceil(movie?.popularity)}%</p>
            </div>
          </div>
          <p className="sm-text">{movie?.overview}</p>
          <Link
            to={movie?.video ?? "."}
            aria-disabled={!movie?.video}
            title="play video"
            className="flex align-center justify-center btn"
          >
            <Svg src={playIcon} width="20px" height="20px" />
            <span>WATCH TRAILER</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

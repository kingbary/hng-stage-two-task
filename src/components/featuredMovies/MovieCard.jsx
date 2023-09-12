import { heartIcon, imdbIcon, cherryIcon } from "../../assets/icons";
import styles from "./featuredMovies.module.css";

function MovieCard() {
  return (
    <div className={`f-column ${styles.movie_card}`}>
      <div className={styles.poster_container}>
        <div className={`flex align-center space-between pad-1`}>
          <div className={`sm-text ${styles.series}`}>TV SERIES</div>
          <div
            className={`flex align-center justify-center ${styles.heart_con}`}
          >
            <img src={heartIcon} width={"20px"} height={"20px"} />
          </div>
        </div>
      </div>
      <p className="sm-text gray400 fw-600">USA, 2016 - Current</p>
      <p className={`fw-700 ${styles.movie_title}`}>Stranger Things</p>

      <div className="flex space-between">
        <div className="flex align-center gap-05">
          <img src={imdbIcon} width={"35px"} height={"17px"} />
          <p className="sm-text">86.0/100</p>
        </div>
        <div className="flex align-center gap-05">
          <img src={cherryIcon} width={"16px"} height={"17px"} />
          <p className="sm-text">97%</p>
        </div>
      </div>
      <p className="sm-text gray400 fw-600">Action, Adventure, Horror</p>
    </div>
  );
}

export default MovieCard;

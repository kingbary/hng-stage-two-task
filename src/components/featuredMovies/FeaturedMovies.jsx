import { Link } from "react-router-dom";
import styles from "./featuredMovies.module.css";
import { arrowRightIcon } from "../../assets/icons";
import MovieCard from "./MovieCard";
import Svg from "../Svg";

function FeaturedMovies({ movies, genres }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`flex space-between ${styles.title_container}`}>
          <h3 className={`pad-05 ${styles.section_title}`}>Featured Movies</h3>

          <Link className={`flex align-center ${styles.see_more}`} to="#">
            See More
            <Svg src={arrowRightIcon} width={"20px"} height={"20px"} />
          </Link>
        </div>
        <div className={`space-between ${styles.movieCard_container}`}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genres={genres} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;

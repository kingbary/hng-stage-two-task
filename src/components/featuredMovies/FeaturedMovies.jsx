import { Link } from "react-router-dom";
import styles from "./featuredMovies.module.css";
import { arrowRightIcon } from "../../assets/icons";
import MovieCard from "./MovieCard";
import Svg from "../Svg";

function FeaturedMovies({ movies }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`flex space-between ${styles.title_container}`}>
          <h3 className={`pad-05 ${styles.section_title}`}>Featured Movies</h3>
          <div className={`flex align-center ${styles.see_more}`}>
            <Link to="#">See More</Link>
            <Svg src={arrowRightIcon} width={"20px"} height={"20px"} />
          </div>
        </div>
        <div className={`space-between ${styles.movieCard_container}`}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;

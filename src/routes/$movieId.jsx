import SideBar from "../components/movieProfile/SideBar";
import MovieProfile from "../components/movieProfile/MovieProfile";
import styles from "../components/movieProfile/movieProfile.module.css";

export default function Movies() {
  return (
    <section className={`flex ${styles.movie_section}`}>
      <SideBar />
      <MovieProfile />
    </section>
  );
}

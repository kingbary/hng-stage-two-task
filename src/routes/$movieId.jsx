import SideBar from "../components/movieProfile/SideBar";
import MovieProfile from "../components/movieProfile/MovieProfile";
import styles from "../components/movieProfile/movieProfile.module.css";
import useRequest from "../hooks/useRequest";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "62fcf0068348285d5390c423175c13dd";

export default function Movies() {
  const { movieId } = useParams();
  const {
    sendRequest: getMovieData,
    response: getMovieDataResponse,
    errors: getMoviesDataError,
  } = useRequest({
    url: `${BASE_URL}/${movieId}?api_key=${API_KEY}`,
    method: "get",
    // onSuccess: (res) => console.log(res)
  });

  const {
    sendRequest: getMovieCredit,
    response: getMovieCreditResponse,
    errors: getMoviesCreditError,
  } = useRequest({
    url: `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}`,
    method: "get",
  });

  useEffect(() => {
    getMovieData();
    getMovieCredit();
  }, []);

  return (
    <>
      <section className={`flex ${styles.movie_section}`}>
        {/* <SideBar /> */}
        <MovieProfile
          movie={getMovieDataResponse}
          movieCredit={getMovieCreditResponse}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

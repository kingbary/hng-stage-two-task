import HeroSection from "../components/hero/HeroSection";
import FeaturedMovies from "../components/featuredMovies/FeaturedMovies";
import Footer from "../components/footer/Footer";
import Navigation from "../components/hero/Navigation";
import useRequest from "../hooks/useRequest";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "62fcf0068348285d5390c423175c13dd";

export default function Root() {
  const { movieId } = useParams();
  const {
    sendRequest: getTopRated,
    response: getTopRatedRes,
    errors: getTopRatedErr,
  } = useRequest({
    url: `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    method: "get",
    onSuccess: (res) => console.log(res),
  });

  const {
    sendRequest: getMovieData,
    response: getMovieDataResponse,
    errors: getMoviesDataError,
  } = useRequest({
    url: `${BASE_URL}/${getTopRatedRes?.id}?api_key=${API_KEY}`,
    method: "get",
    // onSuccess: (res) => console.log(res),
  });

  useEffect(() => {
    getTopRated();
    getMovieData();
  }, []);

  return (
    <>
      <main className="f-column">
        <Navigation movies={getTopRatedRes?.results} />
        <HeroSection movie={getTopRatedRes?.results[0]} />
        <FeaturedMovies
          movies={getTopRatedRes?.results.slice(1, 11)}
          genres={getMovieDataResponse?.genres}
        />
      </main>
      <Footer />
    </>
  );
}

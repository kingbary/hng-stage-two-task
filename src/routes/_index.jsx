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
  const { sendRequest, response, errors } = useRequest({
    url: `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    method: "get",
    // onSuccess: (movies) => console.log(movies),
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <main>
        <Navigation movies={response?.results} />
        <HeroSection movie={response?.results[0]} />
        <FeaturedMovies movies={response?.results.slice(1, 11)} />
      </main>
      <Footer />
    </>
  );
}
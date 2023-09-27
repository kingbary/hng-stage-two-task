import { useEffect, useState } from "react";
import { tvIcon, searchIcon, hamburgerIcon } from "../../assets/icons";
import Svg from "../Svg";
import styles from "./hero.module.css";
import useRequest from "../../hooks/useRequest";
import MovieListItem from "./MovieListItem";

function Navigation({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "62fcf0068348285d5390c423175c13dd";

  const { sendRequest, response, isLoading, errors } = useRequest({
    url: `${BASE_URL}?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=en-US`,
    method: "get",
  });

  useEffect(() => {
    if (searchTerm) sendRequest();
  }, [searchTerm]);

  function blurInput(e) {
    if (e.relatedTarget?.hasAttribute(["data-link"])) return;
    setSearchFocused(false);
  }
  return (
    <nav
      className={`flex  gap-1 space-between align-center container ${styles.nav}`}
    >
      <div className="flex align-center gap-1">
        <img width={"50px"} height={"50px"} src={tvIcon} alt="a tv icon" />
        <span className="logo-text">MovieBox</span>
      </div>

      <div
        onFocus={() => setSearchFocused(true)}
        onBlur={blurInput}
        className={`align-center ${styles.input_container}`}
      >
        <input
          className={styles.search}
          type="text"
          placeholder="What do you want to watch?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button className={styles.btn} title="search">
          <Svg src={searchIcon} width="16px" height="16px" />
        </button>
        {response?.results?.length && searchFocused ? (
          <ul className={styles.searchBox}>
            {isLoading ? (
              <li data-testid="loading">Loading...</li>
            ) : errors ? (
              <li>Error fetching results</li>
            ) : (
              response?.results?.map((movie) => (
                <MovieListItem key={movie.id} movie={movie} />
              ))
            )}
          </ul>
        ) : null}
      </div>
    </nav>
  );
}

export default Navigation;

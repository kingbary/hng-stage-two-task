import { useEffect, useRef, useState } from "react";
import { tvIcon, searchIcon, hamburgerIcon } from "../../assets/icons";
import Svg from "../Svg";
import styles from "./hero.module.css";
import { Link } from "react-router-dom";

function Navigation({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const results = searchTerm
      ? Object.values(movies).filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm)
        )
      : [];
    setSearchResults((prev) => results);
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
        {searchResults.length && searchFocused ? (
          <div className={styles.searchBox}>
            {searchResults.map((movie, idx) => (
              <ul key={idx}>
                <Link data-link="link" to={`movie/${movie?.id}`}>
                  <li className="white">
                    {movie.title} ({movie.release_date.split("-")[0]})
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        ) : null}
      </div>

      <div className=" flex align-center gap-1">
        <span className="md-text-white">Sign in</span>
        <button
          title="menu"
          className={`flex align-center justify-center ${styles.hamburger_bg}`}
        >
          <Svg src={hamburgerIcon} />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

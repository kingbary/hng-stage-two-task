import styles from "./movieProfile.module.css";
import {
  arrowDownIcon,
  listIcon,
  listWhiteIcon,
  starIcon,
  twoTicketIcon,
} from "../../assets/icons";

function MovieInfo({ movie, movieCredit }) {
  const directors = movieCredit?.crew.reduce((cumm, member) => {
    if (member.job === "Director") cumm.add(member.name);
    return cumm;
  }, new Set());
  const writers = movieCredit?.crew.reduce((cumm, member) => {
    if (/(writing)/i.test(member.department)) cumm.add(member.name);
    return cumm;
  }, new Set());
  const cast = movieCredit?.cast.slice(0, 4).map((member) => {
    return member.name;
  });

  return (
    <div className="pad-inline-1">
      <div className={`flex gap-2 wrap space-between ${styles.info_con}`}>
        <div className="flex gap-05">
          <div className="flex md-text fw-600 gap-05">
            <p data-testid="movie-title">
              {movie?.title ?? "Movie title"}
            </p>{" "}
            •{" "}
            <p data-testid="movie-release-date">
              {/* {movie?.release_date.split("-")[0]} */}
              {movie?.release_date}
            </p>{" "}
            • PG-13 • <p data-testid="movie-runtime">{movie?.runtime}</p><span>min</span>
          </div>
          {movie?.genres.map((genre) => {
            return (
              <div
                key={genre.id}
                className={`center-text sm-text fw-500 ${styles.genre_card}`}
              >
                {genre.name}
              </div>
            );
          })}
        </div>
        <div className="flex gap-05">
          <img src={starIcon} width={"24px"} height={"24px"} />
          <p className="fw-600 gray900">
            {movie?.vote_average}{" "}
            <span className="fw-500 gray500">| {movie?.vote_count}</span>
          </p>
        </div>
      </div>
      <div className={`flex gap-1 space-between ${styles.desc_container}`}>
        <div className={`f-column gap-15 ${styles.desc}`}>
          <p data-testid="movie-overview">{movie?.overview}</p>
          <p>
            Director:{" "}
            {Array.from(directors ?? []).map((director, idx, arr) => (
              <span key={director} className="rose700">
                {director}
                {arr[idx + 1] ? ", " : ""}
              </span>
            ))}
          </p>
          <p>
            Writers:{" "}
            {Array.from(writers ?? []).map((writer, idx, arr) => (
              <span key={writer} className="rose700">
                {writer}
                {arr[idx + 1] ? ", " : ""}
              </span>
            ))}
          </p>
          <p>
            Stars:{" "}
            {cast?.map((member, idx, arr) => (
              <span key={member} className="rose700">
                {member}
                {arr[idx + 1] ? ", " : ""}
              </span>
            ))}
          </p>
          <div className={styles.rating_con_group}>
            <div className={`${styles.top_rating}`}>Top rated movie #65</div>
            <div className={styles.input_con}>Awards - 9 nominations</div>
            <img
              className={styles.arrowDown}
              src={arrowDownIcon}
              width={"24px"}
              height={"24px"}
            />
          </div>
        </div>
        <div className={`f-column gap-05 ${styles.other_desc}`}>
          <button className="flex align-center justify-center btn">
            <img
              src={twoTicketIcon}
              width={"24px"}
              height={"24px"}
              alt="two-ticket icon"
            />
            See Showtimes
          </button>
          <button
            className={`flex align-center justify-center ${styles.lightRed_btn}`}
          >
            <img
              src={listIcon}
              width={"24px"}
              height={"24px"}
              alt="list icon"
            />
            More Watch options
          </button>
          <div className={styles.upcoming_movies}>
            <button
              className={`flex align-center justify-center btn ${styles.lightRed_btn}`}
            >
              <img
                src={listWhiteIcon}
                width={"24px"}
                height={"24px"}
                alt="list icon"
              />
              The Best Movies and Shows in September
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;

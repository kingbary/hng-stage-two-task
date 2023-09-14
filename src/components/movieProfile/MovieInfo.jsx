import styles from "./movieProfile.module.css";
import Svg from '../Svg'
import {
  arrowDownIcon,
  listIcon,
  listWhiteIcon,
  starIcon,
  twoTicketIcon,
} from "../../assets/icons";

function MovieInfo() {
  return (
    <div className="pad-inline-1">
      <div className="flex gap-2 m-1 space-between">
        <div className="flex gap-05">
          <p className="md-text fw-600">
            Top Gun: Maverick • 2022 • PG-13 • 2h 10m
          </p>
          <div className={`center-text sm-text fw-500 ${styles.genre_card}`}>
            Action
          </div>
          <div className={`center-text sm-text fw-500 ${styles.genre_card}`}>
            Drama
          </div>
        </div>
        <div className="flex gap-05">
          <img src={starIcon} width={"24px"} height={"24px"} />
          <p className="fw-600 gray900">
            8.5 <span className="fw-500 gray500">| 350k</span>
          </p>
        </div>
      </div>
      <div className={`flex gap-1 space-between ${styles.desc_container}`}>
        <div className={`f-column gap-15 ${styles.desc}`}>
          <p>
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN's elite graduates on a mission that demands the ultimate
            sacrifice from those chosen to fly it.
          </p>
          <p>
            Director: <span className="rose700">Joseph Kosinski</span>
          </p>
          <p>
            Writers:{" "}
            <span className="rose700">Jim Cash, Jack Epps Jr, Peter Craig</span>
          </p>
          <p>
            Stars:{" "}
            <span className="rose700">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
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

import { Link } from "react-router-dom";
import styles from "./movieProfile.module.css";
import {
  tvIcon,
  homeIcon,
  movieIcon,
  tvShowIcon,
  calendarIcon,
  logoutIcon,
} from "../../assets/icons";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className="flex align-center gap-1 pad-inline-1">
        <img width={"50px"} height={"50px"} src={tvIcon} alt="a tv icon" />
        <p className="logo-text black">MovieBox</p>
      </div>
      <ul>
        <li className={styles.icon_container}>
          <Link to={"/"} className="flex align-center gap-05 fw-600 gray500">
            <img src={homeIcon} alt="house icon" /> Home
          </Link>
        </li>
        <li className={`${styles.icon_container} active-nav`}>
          <Link
            to={"#"}
            className="flex align-center gap-05 fw-600 gray500 active-text"
          >
            <img src={movieIcon} alt="camera icon" />
            Movies
          </Link>
        </li>
        <li className={styles.icon_container}>
          <Link to={"#"} className="flex align-center gap-05 fw-600 gray500">
            <img src={tvShowIcon} alt="an icon" />
            TV Series
          </Link>
        </li>
        <li className={styles.icon_container}>
          <Link to={"#"} className="flex align-center gap-05 fw-600 gray500">
            <img src={calendarIcon} alt="an icon" />
            Upcoming
          </Link>
        </li>
        {/* <div className={`f-column pad-1 ${styles.playGame_con}`}>
            <p className="sm-text fw-500">Play movie quizes and earn free tickets</p>
            <p className="sm-text">50k people are playing now</p>
            <button>Start Playing</button>
        </div> */}
        <li className={styles.icon_container}>
          <Link to={"#"} className="flex align-center gap-05 fw-600 gray500">
            <img src={logoutIcon} alt="an icon" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;

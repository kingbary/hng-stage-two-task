import styles from "./hero.module.css";
import { imdbIcon, cherryIcon, playIcon } from "../../assets/icons";

function HeroContent() {
  return (
    <div className="container">
      <div className={`f-column gap-1 ${styles.hero_content}`}>
        <h1 className={`${styles.movie_title}`}>
          John Wick 3: Parrabellum
        </h1>
        <div className="flex gap-25">
          <div className="flex align-center gap-05">
            <img src={imdbIcon} width={"35px"} height={"17px"} />
            <p className="sm-text">86.0/100</p>
          </div>
          <div className="flex align-center gap-05">
            <img src={cherryIcon} width={"16px"} height={"17px"} />
            <p className="sm-text">97%</p>
          </div>
        </div>
        <p className="sm-text">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button
          className={`flex align-center justify-center ${styles.playIcon_btn}`}
        >
          <img src={playIcon} alt="" />
          <p>WATCH TRAILER</p>
        </button>
      </div>
    </div>
  );
}

export default HeroContent;

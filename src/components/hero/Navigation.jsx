import { tvIcon, searchIcon, hamburgerIcon } from "../../assets/icons";
import Svg from "../Svg";
import styles from "./hero.module.css";

function Navigation() {
  return (
    <nav className={`flex space-between align-center container ${styles.nav}`}>
      <div className="flex align-center gap-1">
        <img width={"50px"} height={"50px"} src={tvIcon} alt="a tv icon" />
        <span className="logo-text">MovieBox</span>
      </div>

      <div className={`align-center ${styles.input_container}`}>
        <input
          className={styles.search}
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className={styles.btn} title="search">
          <Svg src={searchIcon} width="16px" height="16px" />
        </button>
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

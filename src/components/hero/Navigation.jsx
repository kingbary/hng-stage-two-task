import { tvIcon, searchIcon, hamburgerIcon } from "../../assets/icons";
import styles from "./hero.module.css";

function Navigation() {
  return (
    <nav className={`flex space-between container ${styles.nav}`}>
      <div className="flex align-center gap-1">
        <img width={"50px"} height={"50px"} src={tvIcon} />
        <p className="logo-text">MovieBox</p>
      </div>
      <div className={`flex align-center ${styles.input_container}`}>
        <input type="text" placeholder="What do you want to watch?" />
        <button className={styles.btn}>
          <img src={searchIcon} />
        </button>
      </div>
      <div className=" flex align-center gap-1">
        <p className="md-text-white">Sign in</p>
        <button
          className={`flex align-center justify-center ${styles.hamburger_bg}`}
        >
          <img src={hamburgerIcon} />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

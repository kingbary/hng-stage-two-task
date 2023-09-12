import {
  facebookIcon,
  twitterIcon,
  instagramIcon,
  youtubeIcon,
} from "../../assets/icons";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className={`container f-column align-center fw-600 ${styles.footer_container}`}
      >
        <div className={`flex ${styles.socials_container}`}>
          <Link to={"#"}>
            <img src={facebookIcon} width={"24px"} height={"auto"} />
          </Link>
          <Link to={"#"}>
            <img src={instagramIcon} width={"24px"} height={"auto"} />
          </Link>
          <Link to={"#"}>
            <img src={twitterIcon} width={"24px"} height={"auto"} />
          </Link>
          <Link to={"#"}>
            <img src={youtubeIcon} width={"24px"} height={"auto"} />
          </Link>
        </div>
        <div className={`flex ${styles.footer_link}`}>
          <Link to={"#"}>Condition of Use</Link>
          <Link to={"#"}>Privacy & Policy</Link>
          <Link to={"#"}>Press Room</Link>
        </div>
        <p className="gray500">&copy; 2023 MovieBox by Kingsley Akwa</p>
      </div>
    </footer>
  );
}

export default Footer;

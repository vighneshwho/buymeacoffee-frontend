import styles from "./style.module.scss";
import logo from "../../assets/logo.png";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className={styles.headerParent}>
      <div className={styles.headerImage}>
        <img src={logo} alt="" />
      </div>

      <ul style={{ marginRight: "auto" }} className={styles.menu}>
        <li>Home</li>
        <li>Features</li>
        <li>Explore creators</li>
        <li>FAQ</li>
      </ul>

      <SearchBox />

      <div className={styles.buttons}>
        <div className="button white">Sign In</div>
        <div className="button">Sign Up</div>
      </div>
    </div>
  );
};

export default Header;

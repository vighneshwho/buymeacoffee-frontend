import styles from "./style.module.scss";
import menu from "../../assets/menu.svg";
import close from "../../assets/x.svg";
import logo from "../../assets/logo.png";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={styles.headerParent}>
      <div className={styles.headerImage}>
        <img src={logo} alt="" />
      </div>

      <ul style={{ marginRight: "auto" }} className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Explore creators</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      <SearchBox />

      <div className={styles.buttons}>
        <div className="button white">Sign In</div>
        <div className="button">Sign Up</div>
      </div>
      <div
        className={styles.menuIcon}
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        <img src={menu} alt="" />
      </div>

      <div
        className={styles.menuDrawer}
        style={{
          left: `${drawerOpen ? 0 : 100}%`,
        }}
      >
        <ul style={{ marginRight: "auto" }} className={styles.drawerMenu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Explore creators</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <SearchBox />

        <div className={styles.drawerButtons}>
          <div className="button white">Sign In</div>
          <div className="button">Sign Up</div>
        </div>

        <div
          className={styles.close}
          onClick={() => {
            setDrawerOpen(false);
          }}
        >
          <img src={close} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

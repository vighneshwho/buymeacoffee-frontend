import styles from "./style.module.scss";
import menu from "../../assets/menu.svg";
import close from "../../assets/x.svg";
import logo from "../../assets/logo.png";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Header = ({ isUsers = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={styles.headerParent}>
      <div className={styles.headerImage}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>

      <ul style={{ marginRight: "auto" }} className={styles.menu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/users">Features</a>
        </li>
        <li>
          <a href="/users">Explore creators</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      {isUsers && (
        <div className={styles.admin}>
          <span>Admin</span>
          <div className={styles.avatarContainer}>
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt="admin"
            />
          </div>
        </div>
      )}

      {!isUsers && <SearchBox />}

      {!isUsers && (
        <div className={styles.buttons}>
          <a
            href="/users"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="button white">Sign In</div>
          </a>

          <a
            href="/users"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="button">Sign Up</div>
          </a>
        </div>
      )}

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/users">Features</a>
          </li>
          <li>
            <a href="/users">Explore creators</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        {!isUsers && <SearchBox />}

        {!isUsers && (
          <div className={styles.drawerButtons}>
            <div className="button white">Sign In</div>
            <div className="button">Sign Up</div>
          </div>
        )}

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

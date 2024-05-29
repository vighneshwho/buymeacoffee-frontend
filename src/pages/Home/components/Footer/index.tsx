import style from "./style.module.scss";
import logo from "../../../../assets/logo.png";
import playstore from "./assets/playstore.png";
import appstore from "./assets/appstore.png";
const Footer = () => {
  return (
    <div className={style.footerContainerMain}>
      <div className={style.footerContainer}>
        <div className={style.logoContainer}>
          <img src={logo} alt="" />
        </div>

        <div className={style.footerMain}>
          <div className={style.footerLinksParent}>
            <div className={style.footerLinks}>
              <div className={style.title}>Company</div>
              <a href="#">About</a>
              <a href="#">Privacy</a>
              <a href="#">Privacy & Terms</a>
            </div>

            <div className={style.footerLinks}>
              <div className={style.title}>Support</div>
              <a href="#">Chat with us</a>
              <a href="#">help center</a>
              <a href="#">Feature request</a>
            </div>

            <div className={style.footerLinks}>
              <div className={style.title}>Community</div>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Discord</a>
            </div>

            <div className={style.footerLinks}>
              <div className={style.title}>More</div>
              <a href="#">Buttons</a>
              <a href="#">Brand assets</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div className={style.footerAppStoreLinks}>
            <img src={playstore} alt="playstore" />
            <img src={appstore} alt="appstore" />
          </div>
          <div className={style.privacyTerms}>© 2023. Privacy & Terms.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

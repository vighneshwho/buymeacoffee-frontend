import Header from "../../../../components/Header";
import HeroPhone from "./HeroPhone";
import PhoneInput from "./PhoneInput";
import style from "./style.module.scss";

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <Header />
      <div className={style.heroMeta}>
        <div className={style.heroTitle}>
          Stay close to your <br /> <span>favorite people.</span>
        </div>

        <PhoneInput />
      </div>
      <HeroPhone />
    </div>
  );
};

export default Hero;

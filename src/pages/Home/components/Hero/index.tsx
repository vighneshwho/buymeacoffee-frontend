import { useEffect, useRef } from "react";
import Header from "../../../../components/Header";
import HeroPhone from "./HeroPhone";
import PhoneInput from "./PhoneInput";
import style from "./style.module.scss";
import anime from "animejs";

const Hero = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });
    timeline
      .add({
        targets: "#mainTitle .el",
        opacity: [0, 1],
        delay: anime.stagger(500),
        duration: 5000,
      })
      .add(
        {
          targets: "#phoneInput",
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
        },
        "-=5000"
      );
  }, []);

  return (
    <div className={style.heroContainer}>
      <Header />
      <div className={style.heroMeta}>
        <div className={style.heroTitle} id="mainTitle">
          <span className="el">Stay</span> <span className="el">close</span>{" "}
          <span className="el">to your</span> <br />{" "}
          <span className={`${style.purpleText} purpleText el`}>
            favorite people.
          </span>
        </div>

        <div id="phoneInput">
          <PhoneInput />
        </div>
      </div>
      <HeroPhone />
    </div>
  );
};

export default Hero;

import style from "./style.module.scss";
import smile from "../../assets/smile.svg";
import arrow from "../../assets/arrow.svg";
import woman from "../../assets/woman.png";
import emojis from "../../assets/emojis.png";
import voice from "../../assets/voice.png";
import lines from "../../assets/lines.svg";
import { useEffect, useRef } from "react";
import anime from "animejs";

const DetailPrimary = () => {
  const detailParentRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const isPhone = window.matchMedia("(max-width: 768px)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            (isPhone || entry.intersectionRatio >= 0.8) &&
            !hasAnimated.current
          ) {
            hasAnimated.current = true;
            const timeline = anime.timeline({
              easing: "easeOutExpo",
              duration: 1000,
            });

            timeline
              .add({
                targets: "#meta > *",
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
              })
              .add(
                {
                  targets: "#dynamicMediaParent",
                  translateY: [50, 0],
                  opacity: [0, 1],
                },
                "-=1000"
              )
              .add(
                {
                  targets: "#mainDynamicImage",
                  translateY: [50, 0],
                  opacity: [0, 1],
                },
                "-=800"
              )
              .add(
                {
                  targets: "#dynamicMedia .dynamicElement",
                  translateY: [50, 0],
                  opacity: [0, 1],
                  delay: anime.stagger(200),
                },
                "-=800"
              );
          }
        });
      },
      {
        threshold: isPhone ? 0.1 : 0.8,
      }
    );

    if (detailParentRef.current) {
      observer.observe(detailParentRef.current);
    }

    return () => {
      if (detailParentRef.current) {
        observer.unobserve(detailParentRef.current);
      }
    };
  }, []);

  return (
    <div className={style.detailParent} ref={detailParentRef}>
      <div className={style.detailMeta} id="meta">
        <img src={smile} alt="smiley face" />
        <div className={style.detailMetaTitle}>Express Yourself freely</div>
        <div className={style.detailMetaDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <a href="#" className={style.learnMore}>
          Learn More <img src={arrow} alt="Arrow" />
        </a>
      </div>
      <div
        className={`${style.detailMedia} ${style.dynamicMedia}`}
        id="dynamicMedia"
      >
        <img
          src={lines}
          alt="lines"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "10px",
            right: "-20px",
            top: "70px",
          }}
        />
        <img
          src={emojis}
          alt="emojis"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "260px",
            left: "-120px",
            top: "90px",
          }}
        />
        <img
          src={voice}
          alt="voice"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "210px",
            left: "-30px",
            top: "300px",
          }}
        />
        <div className={style.dymanicMediaPrent} id="dynamicMediaParent">
          <div className={style.dynamicImgContainer}>
            <img
              src={woman}
              className={style.mainDynamicImage}
              id="mainDynamicImage"
              alt="woman"
            />
            <div className={style.dynamicMediaBg}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPrimary;

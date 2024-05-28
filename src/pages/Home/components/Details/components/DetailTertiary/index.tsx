import style from "./style.module.scss";
import smile from "../../assets/smile.svg";
import arrow from "../../assets/arrow.svg";
import man from "../../assets/man.png";
import maps from "../../assets/maps.png";
import manBubble from "../../assets/manBubble.png";
import lines from "../../assets/tertiaryLines.svg";
import { useEffect, useRef } from "react";
import anime from "animejs";

const DetailTertiary = () => {
  const detailParentRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.8 &&
            !hasAnimated.current
          ) {
            hasAnimated.current = true;
            const timeline = anime.timeline({
              easing: "easeOutExpo",
              duration: 1000,
            });

            timeline
              .add({
                targets: "#metaTertiary > *",
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
              })
              .add(
                {
                  targets: "#dynamicMediaParentTertiary",
                  translateY: [50, 0],
                  opacity: [0, 1],
                },
                "-=1000"
              )
              .add(
                {
                  targets: "#mainDynamicImageTertiary",
                  translateY: [50, 0],
                  opacity: [0, 1],
                },
                "-=800"
              )
              .add(
                {
                  targets: "#dynamicMediaTertiary .dynamicElement",
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
        threshold: 0.8,
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
      <div className={style.detailMeta} id="metaTertiary">
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
        id="dynamicMediaTertiary"
      >
        <img
          src={lines}
          alt="lines"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "10px",
            left: "-20px",
            top: "150px",
          }}
        />
        <img
          src={maps}
          alt="maps"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "102px",
            right: "-70px",
            top: "200px",
          }}
        />
        <img
          src={manBubble}
          alt="manBubble"
          className={`${style.dynamicElement} dynamicElement`}
          style={{
            width: "180px",
            left: "-30px",
            bottom: "-20px",
          }}
        />
        <div
          className={style.dymanicMediaPrent}
          id="dynamicMediaParentTertiary"
        >
          <div className={style.dynamicImgContainer}>
            <img
              src={man}
              className={style.mainDynamicImage}
              id="mainDynamicImageTertiary"
              alt="man"
            />
            <div className={style.dynamicMediaBg}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTertiary;

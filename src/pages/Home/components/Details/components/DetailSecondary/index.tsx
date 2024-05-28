import style from "./style.module.scss";
import create from "../../assets/create.svg";
import arrow from "../../assets/arrow.svg";
import createPhone from "../../assets/createPhone.png";
import { useEffect, useRef } from "react";
import anime from "animejs";

const DetailSecondary = () => {
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
                targets: "#metaSecondary > *",
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
              })
              .add(
                {
                  targets: "#secondaryMedia",
                  translateY: [50, 0],
                  opacity: [0, 1],
                },
                "-=1000"
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
      <div className={style.detailMeta} id="metaSecondary">
        <img src={create} alt="create" />
        <div className={style.detailMetaTitle}>Create and Share</div>
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
      <div className={`${style.detailMedia}`} id="secondaryMedia">
        <img src={createPhone} alt="" style={{ height: "475px" }} />
      </div>
    </div>
  );
};

export default DetailSecondary;

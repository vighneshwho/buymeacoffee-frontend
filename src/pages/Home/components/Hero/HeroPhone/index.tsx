import style from "./style.module.scss";
import boy from "../../../../../assets/boy.png";
import girl from "../../../../../assets/girl.png";
import audio from "../../../../../assets/audio.png";
import bag from "../../../../../assets/bag.jpg";
import gift from "../../../../../assets/gift.png";
import overlayPlay from "../../../../../assets/overlayPlay.png";
// import { useEffect, useRef } from "react";
// import anime from "animejs";

const HeroPhone = () => {
  return (
    <div className={style.heroPhoneParent}>
      <div className={style.phone} id="phone">
        <div className={style.phoneHeader}>
          <div className={style.dp}>
            <img src={girl} alt="" />
          </div>
          <div className={style.headerMeta}>
            <span className={style.metaTitle}>Sara John</span>
            <span className={style.metaSubtitle}>Active Now</span>
          </div>
        </div>

        <div className={style.phoneChat}>
          <div className={`${style.chat} ${style.chatLeft}`}>
            <div className={style.bubble}>Yeah sure! get him too.</div>
            <div className={style.meta}>12:00 PM</div>
          </div>

          <div className={`${style.chat} ${style.chatRight}`}>
            <div className={style.bubble}>Alright! See you soon!</div>
            <div className={style.meta}>12:25 PM</div>
          </div>

          <div className={`${style.chat} ${style.chatLeft}`}>
            <div className={style.bubble}>
              <img src={audio} className={style.chatAudio} alt="" />
            </div>
            <div className={style.meta}>12:22 PM</div>
          </div>

          <div className={`${style.chat} ${style.chatRight}`}>
            <div className={style.bubble}>
              <img className={style.chatMedia} src={bag} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.overlayBoy} ${style.overlay}`}>
        <div className={style.dp}>
          <img src={boy} alt="" />
        </div>
        <div className={style.bubble}>
          <img src={overlayPlay} alt="" />
          <span>0:16</span>
        </div>
      </div>

      <div className={`${style.overlayGirl} ${style.overlay}`}>
        <div className={style.dp}>
          <img src={girl} alt="" />
        </div>
        <div className={style.bubble}>
          <img src={gift} alt="" />
          <span>
            You received <br /> a Gift
          </span>
          <button className={style.overlayGirlButton}>View gift</button>
        </div>
      </div>

      <div className={style.bgCircle1}></div>
      <div className={style.bgCircle2}></div>
      <div className={style.bgCircle3}></div>
    </div>
  );
};

export default HeroPhone;

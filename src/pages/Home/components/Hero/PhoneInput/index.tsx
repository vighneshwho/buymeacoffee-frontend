import style from "./style.module.scss";

const PhoneInput = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={style.phoneInputParent}>
        <input type="text" placeholder={"Enter your phone number"} />
        <div className={style.blackButton}>Get Started</div>
      </div>

      <div className={`${style.blackButton} ${style.mobileButton}`}>
        Get Started
      </div>
    </div>
  );
};

export default PhoneInput;

import style from "./style.module.scss";

const PhoneInput = () => {
  return (
    <div className={style.phoneInputParent}>
      <input type="text" placeholder={"Enter your phone number"} />
      <div className={style.blackButton}>Get Started</div>
    </div>
  );
};

export default PhoneInput;

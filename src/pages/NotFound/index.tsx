import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainContainer}>
      <div className={style.code}>404</div>
      <div className={style.subtitle}>This page doesn't Exist</div>

      <button
        className={style.button}
        onClick={() => {
          navigate("/");
        }}
      >
        Take Me Home
      </button>
    </div>
  );
};

export default NotFound;

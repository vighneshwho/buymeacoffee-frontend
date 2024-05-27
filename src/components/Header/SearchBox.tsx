import style from "./style.module.scss";
import search from "../../assets/icons/search.svg";

const SearchBox = () => {
  return (
    <div className={style.searchBoxParent}>
      <img src={search} alt="" />
      <input type="text" placeholder={"Search creators"} />
    </div>
  );
};

export default SearchBox;

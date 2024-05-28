import { useEffect, useState } from "react";
import style from "./style.module.scss";

const Carousel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://gorest.co.in/public/v2/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const userElements = users.map((user, index) => {
    const uniqueSrc = `https://xsgames.co/randomusers/avatar.php?g=${
      user.gender
    }&id=${Math.random()}`;
    return (
      <div className={style.carouselElement} key={index}>
        <div className={style.overlay}>
          <div className={style.activeState}>
            <div
              className={style.statusColor}
              style={{
                backgroundColor: `${
                  user.status === "active" ? "#4C9A2A" : "#FF0000"
                }`,
              }}
            ></div>
            <span>{user.status}</span>
          </div>
          <span className={style.userName}>{user.name}</span>
        </div>

        <img src={uniqueSrc} alt="" />
      </div>
    );
  });

  return (
    <div className={style.carouselMainContainer}>
      <div className={style.meta}>
        <div className={style.metaTitle}>Around 5M+ creators</div>
        <div className={style.metaDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut la
        </div>
      </div>

      <div className={style.imageCarouselMain}>
        <div className={`${style.carousel} ${style.carouselMain}`}>
          {userElements}
        </div>
        <div className={`${style.carousel} ${style.carouselSecondary}`}>
          {userElements}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

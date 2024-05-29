import style from "./style.module.scss";
import down from "../assets/down.svg";
import data from "./data.ts";

const UserData = () => {
  const rowItems = data.map((user, index) => {
    return (
      <tbody key={index}>
        <tr className={`${style.tableRow}`}>
          <td className={style.name}>{user.name}</td>
          <td className={style.email}>{user.email}</td>
          <td className={style.gender}>{user.gender}</td>
          <td className={style.status}>{user.status}</td>
          <td
            className={style.action}
            style={{
              justifyContent: "flex-end",
            }}
          >
            Edit Delete
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className={style.userDataMain}>
      <div className={style.userDataContainer}>
        <div className={style.userDataHeader}>
          <div className={style.title}>Manage creators</div>
          <div className={style.addUser}>+ Add a new creator</div>
        </div>

        <div className={style.userTableContainerParent}>
          <table>
            <thead>
              <tr>
                <th className={style.name}>Name</th>
                <th className={style.email}>Email</th>
                <th className={style.gender}>Gender</th>
                <th className={style.status}>Available for chat</th>
                <th className={style.action}>Action</th>
              </tr>
            </thead>
            {rowItems}
          </table>
        </div>

        <div className={style.buttonContainer}>
          <button className={style.loadMore}>
            Load More <img src={down} alt="arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;

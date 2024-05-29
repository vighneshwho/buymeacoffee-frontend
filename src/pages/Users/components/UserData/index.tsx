import style from "./style.module.scss";
import data from "./data.ts";

const UserData = () => {
  const rowItems = data.map((user, index) => {
    return (
      <div className={`${style.tableRow}`} key={index}>
        <div className={style.rowItem}>{user.name}</div>
        <div className={style.rowItem}>{user.email}</div>
        <div className={style.rowItem}>{user.gender}</div>
        <div className={style.rowItem}>{user.status}</div>
        <div
          className={style.rowItem}
          style={{
            justifyContent: "flex-end",
          }}
        >
          Edit Delete
        </div>
      </div>
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
          <div className={style.userTableContainer}>
            <div className={`${style.tableRow} ${style.tableHeader}`}>
              <div className={style.rowItem}>Name</div>
              <div className={style.rowItem}>Email</div>
              <div className={style.rowItem}>Gender</div>
              <div className={style.rowItem}>Available for chat</div>
              <div
                className={style.rowItem}
                style={{
                  justifyContent: "flex-end",
                }}
              >
                Action
              </div>
            </div>
            {rowItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;

import style from "./style.module.scss";
import down from "../assets/down.svg";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const UserData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const usersPerPage = 7;

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://gorest.co.in/public/v2/users?page=${page}&per_page=${usersPerPage}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setPage((prev) => prev + 1);
      const data = await response.json();
      setUsers((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const rowItems = users.map((user, index) => {
    return (
      <tbody key={index}>
        <tr className={`${style.tableRow}`}>
          <td className={style.name}>{user.name}</td>
          <td className={style.email}>{user.email}</td>
          <td className={style.gender}>{user.gender}</td>
          <td
            className={style.status}
            style={{
              color: `${user.status === "active" ? "#4C9A2A" : "#FF0000"}`,
              fontWeight: "600",
            }}
          >
            {user.status}
          </td>
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
          <button className={style.loadMore} onClick={() => fetchUsers()}>
            Load More <img src={down} alt="arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;

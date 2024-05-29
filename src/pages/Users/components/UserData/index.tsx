import style from "./style.module.scss";
import bin from "../assets/delete.svg";
import down from "../assets/down.svg";
import { ReactElement, useEffect, useState } from "react";
import Modal from "../Modal";

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
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [rowItems, setRowItems] = useState<ReactElement[]>([]);
  const token = import.meta.env.VITE_API_TOKEN;

  const openModal = (user: User | null = null) => {
    if (user) {
      setSelectedUser(user);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsEdit(false);
    setSelectedUser(null);
    console.log("selectedUser set to:", selectedUser);
    setIsModalOpen(false);
  };

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

  const handleEdit = (user: User) => {
    setIsEdit(true);
    openModal(user);
  };

  const deleteFromLocal = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const editFromLocal = (updatedUser: User) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });

    setUsers(updatedUsers);
  };

  const addToLocal = (updatedUser: User) => {
    const updatedUsers = [updatedUser, ...users];

    setUsers(updatedUsers);
  };

  const handleDelete = async (userId: number) => {
    try {
      const url = `https://gorest.co.in/public/v2/users/${userId}`;
      const method = "DELETE";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        deleteFromLocal(userId);
      } else {
        console.error("Failed to delete user from API");
        const errorData = await response.json();
        console.error("Error details:", errorData);
        // Handle error as needed
      }
    } catch (error) {
      console.error("Error while deleting user from API:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const updatedRowItems = users.map((user, index) => (
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
            className={style.actionTd}
            style={{
              justifyContent: "flex-end",
            }}
          >
            <button className={style.edit} onClick={() => handleEdit(user)}>
              Edit
            </button>
            <button
              className={style.delete}
              onClick={() => handleDelete(user.id)}
            >
              <img src={bin} alt="" />
            </button>
          </td>
        </tr>
      </tbody>
    ));

    // Update the rowItems state with the updatedRowItems
    setRowItems(updatedRowItems);
  }, [users]);

  return (
    <div className={style.userDataMain}>
      <div className={style.userDataContainer}>
        <div className={style.userDataHeader}>
          <div className={style.title}>Manage creators</div>
          <div
            className={style.addUser}
            onClick={() => {
              openModal();
            }}
          >
            + Add a new creator
          </div>
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
      <Modal
        isOpen={isModalOpen}
        editFromLocal={editFromLocal}
        addToLocal={addToLocal}
        selectedUser={selectedUser}
        isEdit={isEdit}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UserData;

import style from "./style.module.scss";
import close from "../../../../assets/x.svg";
import { useEffect, useState } from "react";

interface ErrorItem {
  field: string;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  isEdit: boolean;
  selectedUser: User | null;
  editFromLocal: (arg0: User) => void;
  addToLocal: (arg0: User) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  isEdit,
  closeModal,
  selectedUser,
  editFromLocal,
  addToLocal,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female");
  const [status, setStatus] = useState("inactive");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const token = import.meta.env.VITE_API_TOKEN;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailTest = !emailRegex.test(email);
    if (emailTest) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    if (!name) {
      setNameError("Name shouldn't be blank");
    } else {
      setNameError("");
    }
    const data = {
      email,
      name,
      gender,
      status,
    };

    if (!emailTest && name) {
      try {
        let url = "https://gorest.co.in/public/v2/users";
        let method = "POST";

        if (isEdit && selectedUser) {
          url = `https://gorest.co.in/public/v2/users/${selectedUser.id}`;
          method = "PUT";
        }
        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          if (isEdit) editFromLocal(responseData);
          else addToLocal(responseData);
          setEmailError("");
          setNameError("");
          closeModal();
        } else {
          console.error("Failed to post data to API");
          const errorData: ErrorItem[] = await response.json();
          console.error("Error details:", errorData);
          errorData.forEach((item) => {
            alert(item.field + " " + item.message);
          });
        }
      } catch (error) {
        console.error("Error while posting data to API:", error);
      }
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setGender(selectedUser.gender);
      setStatus(selectedUser.status);
    } else {
      setName("");
      setEmail("");
    }
  }, [selectedUser]);

  return (
    <div
      className={style.modalContainerMain}
      style={{
        display: `${isOpen ? "flex" : "none"}`,
      }}
    >
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div className={style.title}>Add a new creator</div>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            <img src={close} alt="" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={style.modalForm}>
          <div>
            <label htmlFor="name">Creator Name</label>
            <div className={style.inputContainer}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  borderColor: `${nameError ? "red" : ""}`,
                }}
              />
              {nameError && (
                <span className={style.errorMessage} style={{ color: "red" }}>
                  {nameError}
                </span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div className={style.inputContainer}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  borderColor: `${emailError ? "red" : ""}`,
                }}
              />
              {emailError && (
                <span className={style.errorMessage} style={{ color: "red" }}>
                  {emailError}
                </span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label>Available for chat</label>
            <div className={style.radioDiv}>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <span>Active</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <span>Inactive</span>
              </label>
            </div>
          </div>

          <button type="submit" className={style.button}>
            {isEdit ? "Edit Creator" : "+ Add creator"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

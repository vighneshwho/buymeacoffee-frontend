import style from "./style.module.scss";
import close from "../../../../assets/x.svg";
import { useState } from "react";

interface ErrorItem {
  field: string;
  message: string;
}

const Modal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female");
  const [status, setStatus] = useState("inactive");
  const [emailError, setEmailError] = useState("");

  const token = import.meta.env.VITE_API_TOKEN;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailError) {
      alert("Please fix the errors before submitting");
      return;
    }

    // Data to be posted, taken from state variables
    const data = {
      email,
      name,
      gender,
      status,
    };

    try {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data successfully posted to API");
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
  };

  return (
    <div className={style.modalContainerMain}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <div className={style.title}>Add a new creator</div>
          <img src={close} alt="" />
        </div>

        <form onSubmit={handleSubmit} className={style.modalForm}>
          <div>
            <label htmlFor="name">Creator Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
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
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                Inactive
              </label>
            </div>
          </div>

          <button type="submit" className={style.button}>
            + Add creator
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

import Header from "../../components/Header";
import UserData from "./components/UserData";

const Users = () => {
  return (
    <>
      <Header isUsers={true} />
      <UserData />
    </>
  );
};

export default Users;

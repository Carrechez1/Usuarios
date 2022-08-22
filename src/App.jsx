import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState();
  const [updateUser, setUpdateUser] = useState();
  const [openForm, setOpenForm] = useState(false);

  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  console.log(users);
  return (
    <div className="App">
      <h1 className="user__title">Users</h1>
      <div className="open__container">
        <div className="open__info">Create new User:&nbsp; </div>
        <button className="open__form" onClick={handleOpenForm}>
          <i class="bx bxs-user-plus form__log"></i>
        </button>
      </div>

      <div className={openForm ? `form__container` : `form__none`}>
        <Form
          getAllUsers={getAllUsers}
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
          setOpenForm={setOpenForm}
        />
      </div>
      <section className="card__container">
        {users?.map((user) => (
          <Card
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateUser={setUpdateUser}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </section>
    </div>
  );
}

export default App;

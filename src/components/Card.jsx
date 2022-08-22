import axios from "axios";
import React from "react";

const Card = ({ user, getAllUsers, setUpdateUser, handleOpenForm }) => {
  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };
  const handleUpdateClick = () => {
    handleOpenForm();
    setUpdateUser(user);
    reset;
  };

  return (
    <article className="card">
      <header className="card__header">
        <i className="bx bxs-user-pin card__log"></i>
        <h2 className="card__title">{`${user["first_name"]} ${user["last_name"]}`}</h2>
      </header>
      <ul className="card__list">
        <div className="card__info">
          <li className="card__item ">
            <i className="bx bxs-envelope"></i>
            &nbsp;&nbsp;<strong>Email:</strong> <span>{user["email"]}</span>
          </li>
          <li className="card__item ">
            <i className="bx bxs-cake"></i>
            &nbsp;&nbsp;<strong>Birthday:</strong>{" "}
            <span>{user["birthday"]}</span>
          </li>
          <li className="card__item ">
            <i className="bx bxs-key"> </i>
            &nbsp;&nbsp;<strong>Password:</strong>{" "}
            <span>{user["password"]}</span>
          </li>
        </div>
      </ul>
      <footer className="card__footer">
        <button className="card__but" onClick={deleteUser}>
          <i className="bx bxs-trash card__trash"></i>
        </button>
        <button className="card__but" onClick={handleUpdateClick}>
          <strong>
            <i className="bx bxs-edit-alt card__edit"></i>
          </strong>
        </button>
      </footer>
    </article>
  );
};

export default Card;

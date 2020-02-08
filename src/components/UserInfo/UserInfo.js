import React, { useState } from "react";
import "./UserInfo.css";
import ChangePasswordForm from "../Form/ChangePasswordForm";
import Button from "../Button";

const UserInfo = () => {
  const [changeForm, setChangeForm] = useState(false);

  return (
    <div className="user-info">
      <p>
        {localStorage.getItem("name")} {localStorage.getItem("surname")}
      </p>
      <p>Login: {localStorage.getItem("login")}</p>
      <p>Email: {localStorage.getItem("email")}</p>
      <Button white onClick={() => setChangeForm(!changeForm)}>
        Change password
      </Button>
      {changeForm && <ChangePasswordForm />}
    </div>
  );
};

export default UserInfo;

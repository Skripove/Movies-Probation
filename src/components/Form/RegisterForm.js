import React, { useState } from "react";
//import PropTypes from 'prop-types';
import Form from "./Form";
import Input from "../Input";
import Button from "../Button";

const RegisterForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleClickRegisterBtn = evt => {
    //обработка клика "Register"
    evt.preventDefault();
    if (
      nameValue !== "" &&
      surnameValue !== "" &&
      loginValue !== "" &&
      passwordValue !== "" &&
      emailValue !== ""
    ) {
      localStorage.setItem("name", nameValue);
      localStorage.setItem("surname", surnameValue);
      localStorage.setItem("login", loginValue);
      localStorage.setItem("password", passwordValue);
      localStorage.setItem("email", emailValue);
      setNameValue("");
      setSurnameValue("");
      setLoginValue("");
      setPasswordValue("");
      setEmailValue("");
    } else alert("Не верные данные");
  };

  return (
    <Form>
      <h2>Register</h2>
      <Input
        value={nameValue}
        placeholder="Name"
        onChange={evt => setNameValue(evt.target.value.trim())}
      />
      <Input
        value={surnameValue}
        placeholder="Surame"
        onChange={evt => setSurnameValue(evt.target.value.trim())}
      />
      <Input
        value={loginValue}
        placeholder="Login"
        onChange={evt => setLoginValue(evt.target.value.trim())}
      />
      <Input
        value={passwordValue}
        type="password"
        placeholder="Password"
        onChange={evt => setPasswordValue(evt.target.value.trim())}
      />
      <Input
        value={emailValue}
        type="email"
        placeholder="Email"
        onChange={evt => setEmailValue(evt.target.value.trim())}
      ></Input>
      <Button onClick={handleClickRegisterBtn}>Register</Button>
    </Form>
  );
};

export default RegisterForm;

//   RegisterForm.propTypes = {};

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Input from '../Input';
import Button from '../Button';

const LoginForm = ({setAllowIn}) => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
        
    useEffect(() => {
        const login = localStorage.getItem("login");
        if(login) setLoginValue(login);
    }, []);

    const handleClickLoginBtn = (evt) => {//обработка клика "Login"
        evt.preventDefault();
        const login = localStorage.getItem("login"),
              password = localStorage.getItem("password");
        if(!login || !password){
        alert("Нужно зарегистрироваться");
        }
        else {
        loginValue === login && 
        passwordValue === password ?
            setAllowIn() :
            alert("Введены не верные данные!");
        }
    }

    return (
        <Form>
            <h2>Login</h2>
            <Input 
                value={loginValue}
                placeholder="Login"
                onChange={(evt) => setLoginValue(evt.target.value.trim())}
            />
            <Input 
                value={passwordValue}
                type="password"
                placeholder="Password"
                onChange={(evt) => setPasswordValue(evt.target.value.trim())}
            />
            <Button
            onClick={handleClickLoginBtn}
            >
            Login
            </Button>
        </Form>
    )
}

  export default LoginForm

LoginForm.propTypes = {
    setAllowIn: PropTypes.func
};
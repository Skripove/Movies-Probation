import React, {useState} from 'react';
import './ChangePasswordForm.css';
//import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../Button';
import Input from '../Input';

const ChangePasswordForm = () => {

    const[oldPassword, setOldPassword] = useState('');
    const[newPasswordOne, setNewPasswordOne] = useState('');
    const[newPasswordTwo, setNewPasswordTwo] = useState('');

    const clearInputs = () => {//очистить поля ввода
        setOldPassword('');
        setNewPasswordOne('');
        setNewPasswordTwo('');
    }

    const clickOkBtn = (evt) => {//обработчик кнопки ОК
        evt.preventDefault();
        if(oldPassword === localStorage.getItem("password") &&
           newPasswordOne === newPasswordTwo &&
           newPasswordOne !== '' ) {
               localStorage.setItem("password", newPasswordOne)
               alert(`Пароль изменён на: ${newPasswordOne}`);
               clearInputs();
           }
        else {
            alert("Не верные данные...");
            clearInputs();
        }
    }

    return (
        <div className="change-password">
            <Form>
                <Input 
                    value={oldPassword}
                    placeholder="Password"
                    onChange={(evt)=>setOldPassword(evt.target.value.trim())}
                />
                <Input 
                    value={newPasswordOne}
                    type="password"
                    placeholder="New password"
                    onChange={(evt)=>setNewPasswordOne(evt.target.value.trim())}
                />
                <Input 
                    value={newPasswordTwo}
                    type="password"
                    placeholder="New password"
                    onChange={(evt)=>setNewPasswordTwo(evt.target.value.trim())}
                />
                <Button onClick={clickOkBtn}>Okay</Button>
            </Form>
        </div>
    )
}
  
export default ChangePasswordForm;

//ChangePasswordForm.propTypes = {};
import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput'
import './Form.css';

const Form = function () {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameIsValid, setUsernameIsValid] = useState(true);

    const [passwordInput, setPasswordInput] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(true);

    const [emailCheck, setEmailCheck] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true)

    //usernameCheck
    function onUsername(e) {
        e.preventDefault();
        setUsernameInput(e.target.value.trim());

        if (e.target.value.trim().length > 0) {
            setUsernameIsValid(true);
        }
        setUsernameInput(e.target.value);
        
    }

    //emailCheck
    function emailValidation(e) {
        e.preventDefault();
        setEmailCheck(e.target.value.trim());

        if (e.target.value.trim().length > 0) {
            setIsEmailValid(true);
        }
        setEmailCheck(e.target.value);
        
    }

    //password
    function onPassword(e) {
        setPasswordInput(e.target.value.trim());

        if (e.target.value.trim().length > 0) {
            setPasswordValid(true)
        }
        setPasswordInput(e.target.value);
    }

    //Check password
    function checkPassword(e) {
        setPasswordCheck(e.target.value.trim())

        if (e.target.value.trim().length > 0) {
            setIsPasswordCheckValid(true)
        }
        setPasswordCheck(e.target.value);
    }

    //onSubmitFunction
    function onSubmitHandler(e) {
        e.preventDefault();
        //username
        if (usernameInput.trim().length < 5) {
            setUsernameIsValid(false);
        }else if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
        }
        //password
        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
        }
        //passwordCheck
        if (passwordCheck !== passwordInput || passwordCheck.trim().length === 0) {
            setIsPasswordCheckValid(false)
        }

        //email
        if (emailCheck.trim().length < 5) {
            setIsEmailValid(false)
        }

    }

    

    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Create Account</h2>
            <FormInput
                className={`formControl ${!usernameIsValid ? 'Invalid' : ''}`}
                type="text"
                onChangeHandler={onUsername}
                id="username" >
                Username
            </FormInput>

            <FormInput
                className={`formControl ${!isEmailValid ? 'Invalid' : ''}`}
                type="email"
                onChangeHandler={emailValidation}
                id="email" >
                Email
            </FormInput>

            <FormInput
                className={`formControl ${!isPasswordValid ? 'Invalid' : ''}`}
                type="number"
                onChangeHandler={onPassword}
                id="password" >
                Password
            </FormInput>
            
            <FormInput
                className={`formControl ${!isPasswordCheckValid ? 'Invalid' : ''}`}
                type="number"
                onChangeHandler={checkPassword}
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button>Submit</Button>
        </form>
    )
}

export default Form;
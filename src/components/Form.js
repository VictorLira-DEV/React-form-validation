import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput'
import './Form.css';

const Form = function () {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')

    const [passwordInput, setPasswordInput] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);
    const [passwordMessage, setPasswordMessage] = useState('')

    const [passwordCheck, setPasswordCheck] = useState('');
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(true);
    const [checkPasswordMessage, setCheckPasswordMessage] = useState('');

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
        if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Username cannot be blank');
        }else if (usernameInput.trim().length < 5) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Too short');
        }
        //password
        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
            setPasswordMessage('Password cannot be blank')
        } else if(passwordInput.trim().length < 5){
            setPasswordValid(false);
            setPasswordMessage('Too short')
        }

        //passwordCheck
        if (passwordCheck !== passwordInput || passwordCheck.trim().length === 0) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage("The password doesn't match")
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
                errorMessage={`${usernameErrorMessage}`}
                id="username" >
                Username
            </FormInput>

            <FormInput
                className={`formControl ${!isEmailValid ? 'Invalid' : ''}`}
                type="email"
                onChangeHandler={emailValidation}
                errorMessage="invalid E-mail address"
                id="email" >
                Email
            </FormInput>

            <FormInput
                className={`formControl ${!isPasswordValid ? 'Invalid' : ''}`}
                type="password"
                onChangeHandler={onPassword}
                errorMessage={`${passwordMessage}`}
                id="password" >
                Password
            </FormInput>
            
            <FormInput
                className={`formControl ${!isPasswordCheckValid ? 'Invalid' : ''}`}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={checkPasswordMessage}
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button>Submit</Button>
        </form>
    )
}

export default Form;
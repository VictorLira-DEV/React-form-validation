import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput'
import './Form.css';

const Form = function () {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const [usernameIsValid, setUsernameIsValid] = useState(true);

    const [passwordInput, setPasswordInput] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [checkPasswordMessage, setCheckPasswordMessage] = useState('');
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(true);

    const [emailCheck, setEmailCheck] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    //usernameCheck
    function onUsername(e) {
        e.preventDefault();
        setUsernameInput(e.target.value.trim());

        if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Username cannot be blank');
        }else if (usernameInput.trim().length < 5) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Short username');
        } else if (usernameInput.trim().length >= 5) {
            setUsernameIsValid(true);
        }
        
        setUsernameInput(e.target.value);
        
    }

    //Is email
    function isEmailTrue(email){
        return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
   }

    //emailCheck
    function emailValidation(e) {
        e.preventDefault();
        setEmailCheck(e.target.value.trim());

        if (!isEmailTrue(emailCheck.trim())) {
            setIsEmailValid(false)
            setEmailErrorMessage('Invalid E-mail')
        } else {
            setIsEmailValid(true)
        }
        setEmailCheck(e.target.value.trim());
    }



    //password
    function onPassword(e) {
        setPasswordInput(e.target.value.trim());

        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
            setPasswordMessage('Password cannot be blank')
        } else if(passwordInput.trim().length < 5){
            setPasswordValid(false);
            setPasswordMessage('Weak password')
        } else if (passwordInput.trim().length >= 5) {
            setPasswordValid(true)
        }

        setPasswordInput(e.target.value);
    }

    //Check password
    function checkPassword(e) {
        setPasswordCheck(e.target.value.trim())

        if (passwordCheck.trim().length < 5) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage('Weak password')
        } else {
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
            setUsernameErrorMessage('Short username');
        }
        //password
        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
            setPasswordMessage('Password cannot be blank')
        } else if(passwordInput.trim().length < 5){
            setPasswordValid(false);
            setPasswordMessage('Weak password')
        }

        //passwordCheck
        if (passwordCheck !== passwordInput || passwordCheck.trim().length === 0) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage("The password doesn't match")
        }

        //email
        if (emailCheck.trim().length < 5) {
            setIsEmailValid(false)
            setEmailErrorMessage('invalid E-mail address')
        }

    }

    

    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Create account</h2>
            <FormInput
                className={`formControl ${!usernameIsValid ? 'Invalid' : ''}`}
                type="text"
                onChangeHandler={onUsername}
                placeholder='username'
                errorMessage={`${usernameErrorMessage}`}
                id="username" >
                Username
            </FormInput>

            <FormInput
                className={`formControl ${!isEmailValid ? 'Invalid' : ''}`}
                type="email"
                onChangeHandler={emailValidation}
                placeholder='example@gmail.com'
                errorMessage={emailErrorMessage}
                id="email" >
                E-mail
            </FormInput>

            <FormInput
                className={`formControl ${!isPasswordValid ? 'Invalid' : ''}`}
                type="password"
                onChangeHandler={onPassword}
                placeholder='password'
                errorMessage={`${passwordMessage}`}
                id="password" >
                Password
            </FormInput>
            
            <FormInput
                className={`formControl ${!isPasswordCheckValid ? 'Invalid' : ''}`}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={checkPasswordMessage}
                placeholder='password check'
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button>Submit</Button>
        </form>
    )
}

export default Form;
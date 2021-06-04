import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import styled from 'styled-components';

const Form = styled.form`
    border: 1px solid #ccc;
    background: white;
    padding: 30px 40px;
    width: 400px;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);

    & h2{
        margin-bottom: 30px;
        color: rgb(68, 68, 68);
    }

`

const FormValidation = function () {
    const [usernameInfo, setUsernameInput] = useState({
        usernameInput: '',
        usernameErrorMessage: '',
        usernameIsValid: true,
    });

    const [emailCheck, setEmailCheck] = useState({
        emailInput: '',
        emailErrorMessage: '',
        IsEmailValid: true
    });

    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: '',
        passwordErrorMessage: '',
        isPasswordValid: true
    });
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [checkPasswordMessage, setCheckPasswordMessage] = useState('');
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(true);


    //usernameCheck
    function onUsername(e) {
        e.preventDefault();

        setUsernameInput({
            ...usernameInfo,
            usernameInput: e.target.value
        });

        if (usernameInfo.usernameInput.trim().length === 0 || usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInput({
                usernameInput: e.target.value,
                usernameErrorMessage: 'Too short',
                usernameIsValid: false
            });
        } else {
            setUsernameInput({
                usernameInput: e.target.value,
                usernameErrorMessage: '',
                usernameIsValid: true
            });
        }

    }

    //Is email
    function isEmailTrue(email){
        return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
   }

    //emailCheck
    function emailValidation(e) {
        e.preventDefault();
        setEmailCheck({
            ...emailCheck,
            emailInput: e.target.value.trim()
        });

        if (!isEmailTrue(emailCheck.emailInput)) {
            setEmailCheck({
                emailErrorMessage: 'invalid E-mail address',
                emailInput: e.target.value,
                IsEmailValid: false
            })
        } else {
            setEmailCheck({
                emailErrorMessage: '',
                emailInput: e.target.value,
                IsEmailValid: true
            })
        }
    }



    //password
    function onPassword(e) {
        setPasswordInfo({
            ...passwordInfo,
            passwordInput: e.target.value.trim()
        });

        if (passwordInfo.passwordInput.length === 0) {
            setPasswordInfo({
                passwordInput: e.target.value,
                isPasswordValid: false,
                passwordErrorMessage: 'Password cannot be blank'
            })
        } else if(passwordInfo.passwordInput.trim().length < 5){
            setPasswordInfo({
                passwordInput: e.target.value,
                isPasswordValid: false,
                passwordErrorMessage: 'Weak password'
            });
        } else if (passwordInfo.passwordInput.trim().length >= 5) {
            setPasswordInfo({
                passwordErrorMessage: '',
                passwordInput: e.target.value,
                isPasswordValid: true
            })
        }
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
        if (usernameInfo.usernameInput.trim().length === 0) {
            setUsernameInput({
                ...usernameInfo,
                usernameErrorMessage: 'Username cannot be blank',
                usernameIsValid: false
            });
        } else if (usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInput({
                ...usernameInfo,
                usernameErrorMessage: 'Too short',
                usernameIsValid: false
            })
        } else {
            setUsernameInput({
                ...usernameInfo,
                usernameIsValid: true
            })
        }

        //email
        if (emailCheck.emailInput.length < 5) {
            setEmailCheck({
                ...emailCheck,
                emailErrorMessage: 'invalid E-mail address',
                IsEmailValid: false
            })
        }

        //password
        if (passwordInfo.passwordInput.length === 0) {
            setPasswordInfo({
                ...passwordInfo,
                passwordErrorMessage: 'Password cannot be blank',
                isPasswordValid: false,
            })
        } else if(passwordInfo.passwordInput.trim().length < 5){
            setPasswordInfo({
                ...passwordInfo,
                passwordErrorMessage: 'Weak password',
                isPasswordValid: false,
            })
        }

        //passwordCheck
        if (passwordCheck !== passwordInfo.passwordInput || passwordCheck.trim().length === 0) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage("The password doesn't match")
        }


    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <h2>{ usernameInfo.usernameIsValid }</h2>
            <FormInput
                key='username'
                className={`formControl`}
                booleano={!usernameInfo.usernameIsValid}
                type="text"
                onChangeHandler={onUsername}
                placeholder='Username'
                errorMessage={`${usernameInfo.usernameErrorMessage}`}
                id="username" >
                Username
            
            </FormInput>

            <FormInput
                key='lat'
                className={`formControl`}
                booleano={!emailCheck.IsEmailValid}
                type="email"
                onChangeHandler={emailValidation}
                placeholder='example@gmail.com'
                errorMessage={emailCheck.emailErrorMessage}
                id="email" >
                E-mail
            </FormInput>

            <FormInput
                key="ok"
                className={`formControl`}
                booleano={!passwordInfo.isPasswordValid}
                type="password"
                onChangeHandler={onPassword}
                placeholder='password'
                errorMessage={`${passwordInfo.passwordErrorMessage}`}
                id="password" >
                Password
            </FormInput>
            
            <FormInput
                key="lll"
                className={`formControl`}
                booleano={!isPasswordCheckValid}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={checkPasswordMessage}
                placeholder='password check'
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default FormValidation;
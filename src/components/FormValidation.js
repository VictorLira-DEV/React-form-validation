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
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput:'',
        usernameErrorMessage:'',
        usernameIsValid: true,
    });

    const [emailInfo, setEmailInfo] = useState({
        emailInput: '',
        emailErrorMessage: '',
        IsEmailValid: true
    });

    
    const [passwordCheckInfo, setPasswordCheckInfo] = useState({
        passwordCheckInput: '',
        passwordCheckErrorMessage: '',
        isPasswordCheckValid: true
    });
    
    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: '',
        passwordErrorMessage: '',
        isPasswordValid: true
    });
    //usernameCheck
    function onUsername(e) {
        e.preventDefault();
        
        setUsernameInfo({
            ...usernameInfo,
            usernameInput: e.target.value
        });
        if (usernameInfo.usernameInput.trim().length === 0 || usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInfo({
                usernameInput: e.target.value,
                usernameErrorMessage: 'Too short',
                usernameIsValid: false
            });
        } else {
            setUsernameInfo({
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
        setEmailInfo({
            ...emailInfo,
            emailInput: e.target.value.trim()
        });

        if (!isEmailTrue(emailInfo.emailInput)) {
            setEmailInfo({
                emailErrorMessage: 'invalid E-mail address',
                emailInput: e.target.value,
                IsEmailValid: false
            })
        } else {
            setEmailInfo({
                emailErrorMessage: '',
                emailInput: e.target.value,
                IsEmailValid: true
            })
        }
    }

    //password
    function onPassword(e) {
        e.preventDefault();
        
        setPasswordInfo({
            ...passwordInfo,
            passwordInput: e.target.value
        });

         if(passwordInfo.passwordInput.trim().length < 5){
            setPasswordInfo({
                passwordInput: e.target.value,
                isPasswordValid: false,
                passwordErrorMessage: 'Weak password'
            });
        } else if (passwordInfo.passwordInput.trim().length >= 5) {
            setPasswordInfo({
                passwordInput: e.target.value,
                passwordErrorMessage: '',
                isPasswordValid: true
            })
        }
    }

    //Check password
    function checkPassword(e) {
        e.preventDefault();

        setPasswordCheckInfo({
            ...passwordCheckInfo,
            passwordCheckInput: e.target.value
        })

        if (passwordCheckInfo.passwordCheckInput.length < 5 ) {
            setPasswordCheckInfo({
                passwordCheckInput: e.target.value,
                isPasswordCheckValid: false,
                passwordCheckErrorMessage: "weak password"
            });
        } else if(passwordCheckInfo.passwordCheckInput.length >= 5){
            setPasswordCheckInfo({
                ...passwordCheckInfo,
                passwordCheckInput: e.target.value,
                isPasswordCheckValid: true,
            })

        }

    }

    //onSubmitFunction
    function onSubmitHandler(e) {
        e.preventDefault();
        //username

        setUsernameInfo({
            ...usernameInfo,
            usernameInput: e.target.value
        })

        if (usernameInfo.usernameInput.trim().length === 0) {
            setUsernameInfo({
                ...usernameInfo,
                usernameErrorMessage: 'Username cannot be blank',
                usernameIsValid: false
            });
        } else if (usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInfo({
                ...usernameInfo,
                usernameErrorMessage: 'Too short',
                usernameIsValid: false
            })
        } else {
            setUsernameInfo({
                ...usernameInfo,
                usernameIsValid: true
            })
        }

        //email
        if (emailInfo.emailInput.length < 5) {
            setEmailInfo({
                ...emailInfo,
                emailErrorMessage: 'invalid E-mail address',
                IsEmailValid: false
            })
        }

        //password
        if(passwordInfo.passwordInput.trim().length < 5){
            setPasswordInfo({
                ...passwordInfo,
                isPasswordValid: false,
                passwordErrorMessage: 'Weak password',
            })
        } else {
            setPasswordInfo({
                ...passwordInfo,
                isPasswordValid: true,
                passwordErrorMessage: '',
            })
        }

        //passwordCheck
        if (passwordCheckInfo.passwordCheckInput != passwordInfo.passwordInput || passwordCheckInfo.passwordCheckInput.length < 5) {
            setPasswordCheckInfo({
                ...passwordCheckInfo,
                isPasswordCheckValid: false,
                passwordCheckErrorMessage: "The password doesn't match"
            })
        } else {
            setPasswordCheckInfo({
                ...passwordCheckInfo,
                isPasswordCheckValid: true,
                passwordCheckErrorMessage: "The password doesn't match"
            })
        }

    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <h2> Create account </h2>
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
                booleano={!emailInfo.IsEmailValid}
                type="email"
                onChangeHandler={emailValidation}
                placeholder='example@gmail.com'
                errorMessage={emailInfo.emailErrorMessage}
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
                booleano={!passwordCheckInfo.isPasswordCheckValid}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={passwordCheckInfo.passwordCheckErrorMessage}
                placeholder='password check'
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default FormValidation;
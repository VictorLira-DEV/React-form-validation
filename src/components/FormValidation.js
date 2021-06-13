import { useState } from "react";
import Button from "./Button";
import styled from "styled-components";

const Form = styled.form`
    border: 1px solid #ccc;
    background: white;
    padding: 30px 40px;
    width: 400px;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    & h2 {
        margin-bottom: 30px;
        color: rgb(68, 68, 68);
    }

    & .formControl {
        display: flex;
        flex-direction: column;
        padding-bottom: 19px;
        margin-bottom: 10px;
        position: relative;
        & label {
            display: inline-block;
            margin-bottom: 3px;
            color: rgb(68, 68, 68);
        }
        input {
            padding: 10px;
            border: 1px solid #ccc;
            outline: none;
        }
        small {
            position: absolute;
            bottom: 1px;
            visibility: hidden;
        }
    }

    & .formControl.invalid small {
        color: red;
        visibility: visible;
    }

    & .formControl.invalid input {
        border: 1px solid red;
    }
`;
const FormValidation = function () {
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput: "",
        usernameErrorMessage: "",
        isUsernameValid: true,
    });

    const [emailInfo, setEmailInfo] = useState({
        emailInput: "",
        emailErrorMessage: "",
        IsEmailValid: true,
    });

    const [passwordCheckInfo, setPasswordCheckInfo] = useState({
        passwordCheckInput: "",
        passwordCheckErrorMessage: "",
        isPasswordCheckValid: true,
    });

    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: "",
        passwordErrorMessage: "",
        isPasswordValid: true,
    });

    function hasWhiteSpace(s) {
        return s.indexOf(" ") >= 0;
    }

    function onUsername(e) {
        e.preventDefault();

        setUsernameInfo((userInfo) => {
            const currentUserInput = {
                ...userInfo,
                usernameInput: e.target.value,
            };
            return currentUserInput;
        });
        console.log(usernameInfo.isUsernameValid)
        //username
        if (usernameInfo.usernameInput.length >= 5) {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo,
                    isUsernameValid: true,
                };
                return currentUserInput;
            });
        }
        
        if (hasWhiteSpace(usernameInfo.usernameInput)) {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo,
                    usernameErrorMessage: 'remove white space',
                    isUsernameValid: false,
                };
                return currentUserInput;
            });
        }

    }
    //Is email
    function isEmailTrue(email) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }

    function emailValidation(e) {
        e.preventDefault();
        setEmailInfo((emailvalues) => {
            const emailValues = {
                ...emailvalues,
                emailInput: e.target.value,
            };
            return emailValues;
        });

        if (isEmailTrue(emailInfo.emailInput)) {
            setEmailInfo((emailvalues) => {
                const currentEmailInfo = {
                    ...emailvalues,
                    IsEmailValid: true,
                };
                return currentEmailInfo;
            });
        }
    }

    function onPassword(e) {
        e.preventDefault();

        setPasswordInfo((passwordValues) => {
            const currentPasswordInfo = {
                ...passwordValues,
                passwordInput: e.target.value,
            };
            return currentPasswordInfo;
        });

        if (passwordInfo.passwordInput.trim().length >= 5) {
            setPasswordInfo((passwordValues) => {
                const currentPasswordInfo = {
                    ...passwordValues,
                    isPasswordValid: true,
                };
                return currentPasswordInfo;
            });
        }
    }

    function checkPassword(e) {
        e.preventDefault();

        setPasswordCheckInfo({
            ...passwordCheckInfo,
            passwordCheckInput: e.target.value,
        });
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        //usernameInfo
        if (usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo,
                    usernameErrorMessage: "minimum 6 caracteres required",
                    isUsernameValid: false,
                };
                return currentUserInput;
            });
        }

        if (hasWhiteSpace(usernameInfo.usernameInput)) {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo,
                    usernameErrorMessage: "remove white space",
                    isUsernameValid: false,
                };
                return currentUserInput;
            });
        }
        //email
        if (!isEmailTrue(emailInfo.emailInput)) {
            setEmailInfo((emailValues) => {
                const currentEmailInfo = {
                    ...emailValues,
                    emailErrorMessage: "invalid E-mail address",
                    IsEmailValid: false,
                };
                return currentEmailInfo;
            });
        }

        //password
        if (passwordInfo.passwordInput.trim().length < 5) {
            setPasswordInfo((passwordValue) => {
                const currentPasswordInfo = {
                    ...passwordValue,
                    isPasswordValid: false,
                    passwordErrorMessage: "minimum 6 characaters required",
                };
                return currentPasswordInfo;
            });
        }

        //password check
        if (
            passwordCheckInfo.passwordCheckInput.trim() !==
            passwordInfo.passwordInput.trim()
        ) {
            setPasswordCheckInfo((passwordCheckValue) => {
                const currentPasswordInfo = {
                    ...passwordCheckValue,
                    isPasswordCheckValid: false,
                    passwordCheckErrorMessage: "The password doesn't match",
                };
                return currentPasswordInfo;
            });
        } else if (
            passwordCheckInfo.passwordCheckInput.trim() ===
            passwordInfo.passwordInput.trim()
        ) {
            setPasswordCheckInfo((passwordCheckValue) => {
                const currentPasswordInfo = {
                    ...passwordCheckValue,
                    isPasswordCheckValid: true,
                };
                return currentPasswordInfo;
            });
        }
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <h2> Create account </h2>
            <div
                className={`formControl ${
                    !usernameInfo.isUsernameValid ? "invalid" : ""
                }`}
            >
                <label for="username">Username</label>
                <input
                    type="text"
                    onChange={onUsername}
                    id="username"
                    name="usernmae"
                    placeholder="username"
                />
                <small>{usernameInfo.usernameErrorMessage}</small>
            </div>

            <div
                className={`formControl ${
                    !emailInfo.IsEmailValid ? "invalid" : ""
                }`}
            >
                <label for="email">E-mail</label>
                <input
                    type=""
                    onChange={emailValidation}
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                ></input>
                <small>{emailInfo.emailErrorMessage}</small>
            </div>

            <div
                className={`formControl ${
                    !passwordInfo.isPasswordValid ? "invalid" : ""
                }`}
            >
                <label for="password">Password</label>
                <input
                    onChange={onPassword}
                    id="password"
                    name="password"
                    placeholder="password"
                ></input>
                <small>{passwordInfo.passwordErrorMessage}</small>
            </div>

            <div
                className={`formControl ${
                    !passwordCheckInfo.isPasswordCheckValid ? "invalid" : ""
                }`}
            >
                <label for="password">Password check</label>
                <input
                    onChange={checkPassword}
                    id="passwordCheck"
                    name="passwordCheck"
                    placeholder="confirm password"
                ></input>
                <small>{passwordCheckInfo.passwordCheckErrorMessage}</small>
            </div>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default FormValidation;

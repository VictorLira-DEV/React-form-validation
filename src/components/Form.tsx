import React, { useContext } from "react";
import styles from "../styles/form/Form.module.css";
import Button from "../components/UI/Button";
import FormField from "./FormField";
import { FormContext } from "./context/FormState";

const Form: React.FC = () => {
    const {
        emailState,
        passwordState,
        passwordCheckState,
        usernameState,
        FormIsValid,
        usernameChange,
        usernameBlur,
        emailChange,
        emailBlur,
        passwordChange,
        passwordBlur,
        passwordCheckChange,
        submitUser,
    } = useContext(FormContext);

    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        usernameChange(event);
    };

    const onUsernameBlur = () => {
        usernameBlur();
    };

    //email
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        emailChange(event);
    };

    const onEmailBlur = () => {
        emailBlur();
    };

    //password
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        passwordChange(event);
    };

    const onPasswordBlur = () => {
        passwordBlur();
    };

    //passwordChek
    const onPasswordCheckChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        passwordCheckChange(event);
    };
    const onPasswordCheckBlur = () => {};

    const onSubmitUser = (e: React.FormEvent) => {
        e.preventDefault();
        submitUser();
    };

    return (
        <form className={styles.form} onSubmit={onSubmitUser}>
            <h2> Create Account </h2>
            <FormField
                className={`${styles.form_control} ${
                    usernameState.isValid === false ? styles.invalid : ""
                }`}
                label="Username"
                id="username"
                type="text"
                htmlFor="username"
                small=""
                value={usernameState.value}
                onChange={onUsernameChange}
                onBlur={onUsernameBlur}
            />
            <FormField
                className={`${styles.form_control} ${
                    emailState.isValid === false ? styles.invalid : ""
                }`}
                label="E-mail"
                id="email"
                type="email"
                htmlFor="email"
                small=""
                value={emailState.value}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
            />
            <FormField
                className={`${styles.form_control} ${
                    passwordState.isValid === false ? styles.invalid : ""
                }`}
                label="Password"
                id="password"
                type="password"
                htmlFor="password"
                small=""
                value={passwordState.value}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
            />
            <FormField
                className={`${styles.form_control} ${
                    passwordCheckState.isValid === false ? styles.invalid : ""
                }`}
                label="Password Check"
                id="password2"
                type="password"
                htmlFor="password2"
                small={passwordCheckState.errorMessage}
                value={passwordCheckState.value}
                onChange={onPasswordCheckChange}
                onBlur={onPasswordCheckBlur}
            />
            <Button
                className={`${styles.button} ${
                    FormIsValid === false
                        ? styles.formInvalid
                        : styles.formValid
                }`}
            >
                Submit
            </Button>
        </form>
    );
};

export default Form;

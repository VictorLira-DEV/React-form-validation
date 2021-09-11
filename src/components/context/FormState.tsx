import React, { useState, createContext, useReducer, useEffect } from "react";

import { FormReducer } from "./FormReducer";

type InitialState = {
    value: string;
    isValid: string | boolean;
    errorMessage: string;
};

interface FormTypes {
    usernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    usernameBlur: () => void;
    emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    emailBlur: () => void;
    passwordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    passwordBlur: () => void;
    passwordCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitUser: () => void;
    usernameState: {
        value: string;
        isValid: string | boolean;
        errorMessage: string;
    };
    emailState: {
        value: string;
        isValid: string | boolean;
        errorMessage: string;
    };
    passwordState: {
        value: string;
        isValid: string | boolean;
        errorMessage: string;
    };
    passwordCheckState: {
        value: string;
        isValid: string | boolean;
        errorMessage: string;
    };
    FormIsValid: boolean | string;
}

// export const FormContext = createContext<FormTypes>({
//     here we can add all properties
// });
export const FormContext = createContext<FormTypes>({} as FormTypes);

const inicialState: InitialState = {
    value: "",
    isValid: "",
    errorMessage: "",
};

type IsFormValid = string | boolean;
export const FormProvider = (props: any) => {
    const [FormIsValid, setFormIsValid] = useState<IsFormValid>(false);
    const [usernameState, dispatchUsernameState] = useReducer(
        FormReducer,
        inicialState
    );
    const [emailState, dispatchEmailState] = useReducer(
        FormReducer,
        inicialState
    );

    const [passwordState, dispatchPassword] = useReducer(
        FormReducer,
        inicialState
    );

    const [passwordCheckState, dispatchPasswordCheck] = useReducer(
        FormReducer,
        inicialState
    );

    const { isValid: usernameValid } = usernameState;
    const { isValid: emailValid } = emailState;
    const { isValid: paswordValid } = passwordState;
    const { isValid: passwordCheckValid } = passwordCheckState;
    const { value: usernameValue } = usernameState

    //FormValidation
    useEffect(() => {
        if (usernameValue === "") return;
        const timer = setTimeout(() => {
            setFormIsValid(
                usernameValid === true &&
                    emailValid === true &&
                    paswordValid === true &&
                    passwordCheckValid === true
            );
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [usernameValid, emailValid, paswordValid, passwordCheckValid, usernameValue]);

    function usernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatchUsernameState({
            type: "USERNAME_CHANGE",
            val: e.currentTarget.value,
        });
    }

    function usernameBlur() {
        dispatchUsernameState({ type: "USERNAME_BLUR", val: "" });
    }

    //email
    function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatchEmailState({
            type: "EMAIL_CHANGE",
            val: e.currentTarget.value,
        });
    }

    function emailBlur() {
        dispatchEmailState({ type: "EMAIL_BLUR", val: "" });
    }

    //password
    function passwordChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatchPassword({
            type: "PASSWORD_CHANGE",
            val: e.currentTarget.value,
        });
    }

    function passwordBlur() {
        dispatchPassword({ type: "PASSWORD_BLUR", val: "" });
    }

    //passwordCheck
    function passwordCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatchPasswordCheck({
            type: "PASSWORD_CHECK_CHANGE",
            val: e.currentTarget.value,
        });
    }
    
    //PasswordValidation
    useEffect(() => {
        if (passwordState.value === "" && passwordCheckState.value === "")
            return;

        const timer = setTimeout(() => {
            if (passwordState.value !== passwordCheckState.value) {
                dispatchPasswordCheck({
                    type: "PASSWORD_INVALID_CHANGE",
                    val: passwordCheckState.value,
                });
                return;
            }

            dispatchPasswordCheck({
                type: "PASSWORD_VALID_CHANGE",
                val: passwordCheckState.value,
            });
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [passwordState.value, passwordCheckState.value]);

    function submitUser() {
        if (usernameValid && emailValid && paswordValid && passwordCheckValid) {
            alert("Be welcome");
        } else {
            return;
        }
    }

    return (
        <FormContext.Provider
            value={{
                usernameChange,
                usernameBlur,
                emailChange,
                emailBlur,
                passwordChange,
                passwordBlur,
                passwordCheckChange,
                submitUser,
                usernameState,
                emailState,
                passwordState,
                passwordCheckState,
                FormIsValid,
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
}; /*)*/

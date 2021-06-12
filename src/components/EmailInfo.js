import FormInput from "./FormInput";
import { useState } from "react";

const EmailInfo = function () {
    const [emailInfo, setEmailInfo] = useState({
        emailInput: "",
        emailErrorMessage: "",
        IsEmailValid: true,
    });

    //Is email
    function isEmailTrue(email) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }

    function emailValidation(e) {
        e.preventDefault();
        setEmailInfo((emailInformation) => {
            const currentEmailInput = {
                ...emailInformation,
                emailInput: e.target.value,
            };
            return currentEmailInput;
        });

        if (!isEmailTrue(emailInfo.emailInput)) {
            setEmailInfo((emailInformation) => {
                let currentEmailInput = {
                    ...emailInformation,
                    emailErrorMessage: "Invalid E-mail address",
                    IsEmailValid: false,
                };
                return currentEmailInput;
            });
        } else {
            setEmailInfo((emailInformation) => {
                const currentEmailInput = {
                    ...emailInformation,
                    IsEmailValid: true,
                };

                return currentEmailInput;
            });
        }

        setEmailInfo((emailInformation) => {
            const currentEmailInput = {
                ...emailInformation,
                emailInput: e.target.value,
            };
            return currentEmailInput;
        });
    }

    return (
        <div>
            <FormInput
                className={`formControl`}
                booleano={!emailInfo.IsEmailValid}
                type="email"
                onChangeHandler={emailValidation}
                placeholder="example@gmail.com"
                errorMessage={emailInfo.emailErrorMessage}
                id="email"
            >
                E-mail
            </FormInput>
        </div>
    );
};

export default EmailInfo;

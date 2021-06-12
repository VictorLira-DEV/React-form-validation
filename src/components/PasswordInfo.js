import FormInput from "./FormInput";
import { useState } from "react";

const PasswordInfo = function () {
    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: "",
        passwordErrorMessage: "",
        isPasswordValid: true,
    });

    function onPassword(e) {
        e.preventDefault();

        setPasswordInfo({
            ...passwordInfo,
            passwordInput: e.target.value,
        });

        if (passwordInfo.passwordInput.trim().length < 5) {
            setPasswordInfo({
                passwordInput: e.target.value,
                isPasswordValid: false,
                passwordErrorMessage: "Weak password",
            });
        } else if (passwordInfo.passwordInput.trim().length >= 5) {
            setPasswordInfo({
                passwordInput: e.target.value,
                passwordErrorMessage: "",
                isPasswordValid: true,
            });
        }
    }

    return (
        <div>
            <FormInput
                className={`formControl`}
                booleano={!passwordInfo.isPasswordValid}
                type="password"
                onChangeHandler={onPassword}
                placeholder="password"
                errorMessage={`${passwordInfo.passwordErrorMessage}`}
                id="password"
            >
                Password
            </FormInput>
        </div>
    );
};

export default PasswordInfo;

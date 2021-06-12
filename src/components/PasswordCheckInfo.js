import FormInput from "./FormInput";
import { useState } from "react";

const PasswordCheckInfo = function () {
    const [passwordCheckInfo, setPasswordCheckInfo] = useState({
        passwordCheckInput: "",
        passwordCheckErrorMessage: "",
        isPasswordCheckValid: true,
    });

    function checkPassword(e) {
        e.preventDefault();

        setPasswordCheckInfo((passwordInformations) => {
            const currentPasswordInformations = {
                ...passwordInformations,
                passwordCheckInput: e.target.value,
            };
            return currentPasswordInformations;
        });

        if (passwordCheckInfo.passwordCheckInput.length < 5) {
            setPasswordCheckInfo((passwordInformations) => {
                const currentPasswordInformations = {
                    ...passwordInformations,
                    isPasswordCheckValid: false,
                    passwordCheckErrorMessage: "weak password",
                };
                return currentPasswordInformations;
            });
        } else if (passwordCheckInfo.passwordCheckInput.length >= 5) {
            setPasswordCheckInfo((passwordInformations) => {
                const currentPasswordInformations = {
                    ...passwordInformations,
                    isPasswordCheckValid: true,
                };
                return currentPasswordInformations;
            });
        }

        setPasswordCheckInfo((passwordInformations) => {
            const currentPasswordInformations = {
                ...passwordInformations,
                passwordCheckInput: e.target.value,
            };
            return currentPasswordInformations;
        });
    }

    return (
        <div>
            <FormInput
                className={`formControl`}
                booleano={!passwordCheckInfo.isPasswordCheckValid}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={passwordCheckInfo.passwordCheckErrorMessage}
                placeholder="password check"
                id="passwordCheck"
            >
                Password Check
            </FormInput>
        </div>
    );
};

export default PasswordCheckInfo;

import FormInput from './FormInput';
import { useState } from 'react';

const UsernameInfo = function () {
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput:'',
        usernameErrorMessage:'',
        usernameIsValid: true,
    });

    function onUsername(e) {
        e.preventDefault();
        
        setUsernameInfo((userInfo) => {
            const currentUserInput = ({
                ...userInfo,
                usernameInput: e.target.value
            })
            return currentUserInput;
        });
        if (usernameInfo.usernameInput.trim().length === 0 || usernameInfo.usernameInput.trim().length < 5) {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo,
                    usernameIsValid: false,
                    usernameErrorMessage: 'Too short'
                }
                return currentUserInput;
            });
        } else {
            setUsernameInfo((userInfo) => {
                const currentUserInput = {
                    ...userInfo, usernameIsValid: true
                }
                return currentUserInput;
            });
        }

        setUsernameInfo((userInfo) => {
            const currentUserInput = ({
                ...userInfo,
                usernameInput: e.target.value
            })
            return currentUserInput;
        });
    }


    return (
        <div>
            <FormInput
                className={`formControl`}
                booleano={!usernameInfo.usernameIsValid}
                type="text"
                onChangeHandler={onUsername}
                placeholder='Username'
                errorMessage={`${usernameInfo.usernameErrorMessage}`}
                id="username" >
                Username
            </FormInput>
        </div>
    )
}

export default UsernameInfo
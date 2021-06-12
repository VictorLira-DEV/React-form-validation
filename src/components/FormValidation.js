import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import UsernameInfo from './UsernameInfo';
import EmailInfo from './EmailInfo'
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

    function checkPassword(e) {
        e.preventDefault();

        setPasswordCheckInfo((passwordInformations) => {
            const currentPasswordInformations = {
                ...passwordInformations,
                passwordCheckInput: e.target.value
            }
            return currentPasswordInformations
        })

        if (passwordCheckInfo.passwordCheckInput.length < 5 ) {
            setPasswordCheckInfo((passwordInformations) => {
                const currentPasswordInformations = {
                    ...passwordInformations,
                    isPasswordCheckValid: false,
                    passwordCheckErrorMessage: 'weak password'
                }
                return currentPasswordInformations;
            });

        } else if(passwordCheckInfo.passwordCheckInput.length >= 5){
            setPasswordCheckInfo((passwordInformations) => {
                const currentPasswordInformations = {
                    ...passwordInformations,
                    isPasswordCheckValid: true
                }
                return currentPasswordInformations
            })
        }

        setPasswordCheckInfo((passwordInformations) => {
            const currentPasswordInformations = {
                ...passwordInformations,
                passwordCheckInput: e.target.value
            }
            return currentPasswordInformations
        })

    }

    function onSubmitHandler(e) {
        e.preventDefault();

    //     setUsernameInfo((usernameInformations) => {
    //         const currentUsernameInformations = {
    //             ...usernameInformations,
    //             usernameInput: e.target.value
    //         }
    //         return currentUsernameInformations;
    //     })

    //     if (usernameInfo.usernameInput.trim().length === 0) {
    //         setUsernameInfo((usernameInformations) => {
    //             const currentUsernameInformations = {
    //                 ...usernameInformations,
    //                 usernameIsValid: false,
    //                 usernameErrorMessage: 'Username cannot be blank'
    //             }
                
    //             return currentUsernameInformations
    //         });
    //     } else if (usernameInfo.usernameInput.trim().length < 5) {
    //         setUsernameInfo((usernameInformations) => {
    //             const currentUsernameInformations = {
    //                 ...usernameInformations,
    //                 usernameErrorMessage: 'Too short',
    //                 usernameIsValid: false
    //             }

    //             return currentUsernameInformations
    //         })
    //     } else {
    //         setUsernameInfo((usernameInformations) => {
    //             const currentUsernameInformations = {
    //                 ...usernameInformations,
    //                 usernameIsValid: true
    //             }
    //             return currentUsernameInformations
    //         })
    //     }

    //     if (emailInfo.emailInput.length < 5) {
    //         setEmailInfo((emailInformations) => {
    //             const currentEmailInformations = {
    //                 ...emailInformations,
    //                 emailErrorMessage: 'Invalid E-mail address',
    //                 IsEmailValid: false
    //             }
                
    //             return currentEmailInformations
    //         })
    //     }

    //     if(passwordInfo.passwordInput.trim().length < 5){
    //         setPasswordInfo({
    //             ...passwordInfo,
    //             isPasswordValid: false,
    //             passwordErrorMessage: 'Weak password',
    //         })
    //     } else {
    //         setPasswordInfo({
    //             ...passwordInfo,
    //             isPasswordValid: true,
    //             passwordErrorMessage: '',
    //         })
    //     }

    //     if (passwordCheckInfo.passwordCheckInput != passwordInfo.passwordInput || passwordCheckInfo.passwordCheckInput.length < 5) {
    //         setPasswordCheckInfo({
    //             ...passwordCheckInfo,
    //             isPasswordCheckValid: false,
    //             passwordCheckErrorMessage: "The password doesn't match"
    //         })
    //     } else {
    //         setPasswordCheckInfo({
    //             ...passwordCheckInfo,
    //             isPasswordCheckValid: true
    //         })
    //     }
 }

    return (
        <Form onSubmit={onSubmitHandler}>
            <h2> Create account </h2>
            <UsernameInfo></UsernameInfo>

            <EmailInfo></EmailInfo>

            <FormInput
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
import { useState } from "react";
import  Logo  from "./Logo.jsx"
import { Input } from "./Input.jsx"
import { emailValidateMessage, validateEmail, validatePasswordMessage, validatePassword, validateUsername, validateConfirmPassword, validateUsernameMessage, passwordConfirmationMessage} from '../shared/validators'
import { useRegister } from "../shared/hooks/useRegister.jsx";

export const Register = ({ switchAuthHandler }) =>{
    const { register, isLoading} = useRegister()

    const [formState, setFormState ] = useState({
        email:{
            value: '',
            isValid: false,
            showError: false
        },
        password:{
            value: '',
            isValid: false,
            showError: false
        },
        username:{
            value: '',
            isValid: false,
            showError: false
        },
        passwordConfirm:{
            value: '',
            isValid: false,
            showError: false
        }
    })


    const handleInputValueChange = (value, field) =>{
        setFormState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'username':
                isValid = validateUsername(value)
                break;
            case 'password':
                isValid = validatePassword(value)
                break;
            case 'passwordConfirm':
                isValid = validateConfirmPassword(formState.password.value, value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitDisabled = isLoading || !formState.email.isValid ||!formState.password.isValid ||!formState.passwordConfirm.isValid ||!formState.username.isValid;

    return (
        <div className="register-container">
            <Logo text={'Register Kinal Cast'}/>
            <form className="auth-form">
                <Input
                    field = 'email'
                    label= 'Email'
                    value = {formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidateMessage}
                />
                <Input
                    field = 'username'
                    label= 'Username'
                    value = {formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
                />
                <Input
                    field = 'password'
                    label= 'Password'
                    value = {formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
                <Input
                    field = 'passwordConfirm'
                    label= 'PasswordConfirm'
                    value = {formState.passwordConfirm.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfirm.showError}
                    validationMessage={passwordConfirmationMessage}
                />

                <button onClick={handleRegister} disabled ={isSubmitDisabled}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Already have an account? sign in!
            </span>
        </div>
    )
}
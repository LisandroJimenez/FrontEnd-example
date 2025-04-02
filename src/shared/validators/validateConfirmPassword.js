export const validateConfirmPassword = (pass, confPassword) => {
    return pass === confPassword
}

export const passwordConfirmationMessage = 'Las contraseñas no coinciden.'
export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}

export const emailValidateMessage = "por favor ingresa una direccio de correo electronico valida"
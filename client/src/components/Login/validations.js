const validation = (userData) => {

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /\d/;
    const errors = {};

    if(!userData.email) errors.email = 'Ingresa un email'
    else if(!regexEmail.test(userData.email)) errors.email = 'Email invalido'

    else if(!userData.password) errors.password = 'Ingresa un password'
    else if(!regexPassword.test(userData.password)) errors.password = "La contraseña debe tener al menos 1 numero"

    return errors;
};

export default validation;
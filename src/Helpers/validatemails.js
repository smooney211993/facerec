const emailValidation = (email) => {
    return email.includes('@') && email.includes('.')
}


export default emailValidation;
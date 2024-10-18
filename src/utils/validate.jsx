export const checkValidData = (email , password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,20}$/.test(password);

    if(!isEmailValid) return 'Check your email and password.';
    if(!isPassValid) return 'Check your email and password.';

    return null;
}
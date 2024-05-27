// src/utils/validate.js
export const checkValidData = (email, password, name) => {
  const emailError = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ? null
    : "❌ Please enter a valid email address or phone number.";
  const passwordError = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    ? null
    : "❌ Your password must contain Minimum eight characters, at least one letter, one number and one special character.";
  const nameError = /^([a-zA-Z ]){2,30}$/.test(name) ? null : "❌ Please enter a valid user name.";

  return [emailError, passwordError, nameError];
};

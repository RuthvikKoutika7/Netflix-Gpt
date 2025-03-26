export const checkDataIsValid = (email, password) => {
  const isValidName = /^[a-zA-Z][a-zA-Z\\s]+$/.test(name);
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 // if (!isValidName) return "Enter valid full name with space !!!";
  if (!isValidEmail) return "Email is InValid !!!";
  if (!isValidPassword) return "Password is InValid !!!";

  return null;
};




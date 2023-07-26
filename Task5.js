function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

const passwordLength = parseInt(prompt("Enter the desired password length:"));

if (isNaN(passwordLength) || passwordLength <= 0) {
  console.error("Password length should be a positive integer.");
} else {
  const password = generateRandomPassword(passwordLength);
  console.log("Generated Password:", password);
}

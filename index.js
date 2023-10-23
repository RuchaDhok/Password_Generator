const passwordBox = document.getElementById("password");
const length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "~`,_-+={[}]|:;<,>.?,";
let number = "0123456789";
let allChars = upperCase + lowerCase + symbol + number;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  textToCopy = passwordBox.value;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text successfully copied to clipboard");
    })
    .catch((err) => {
      console.error("Unable to copy text: ", err);
    });
}

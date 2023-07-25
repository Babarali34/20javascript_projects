const result = document.querySelector('#result');

// all inputs into variables
const lengthInput = document.querySelector('#length');
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generate = document.querySelector("#generate");

// generate password
generate.addEventListener("click", () => {
    const passwordLength = +lengthInput.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;

    result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, passwordLength);
});

function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
    // Your password generation logic here
      let password = "";
      let lower = "abcdefghijklmnopqrstuvwxyz";
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let number = "0123456789";
      let symbol = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

      if (hasLower) {
        password += lower.charAt(Math.floor(Math.random() * lower.length));
      }
      if (hasUpper) {
        password += upper.charAt(Math.floor(Math.random() * upper.length));
      }
      if (hasNumber) {
        password += number.charAt(Math.floor(Math.random() * number.length));
      }
      if (hasSymbol) {
        password += symbol.charAt(Math.floor(Math.random() * symbol.length));
      }
      for (let i = 0; i < length - password.length; i++) {
        password += symbol.charAt(Math.floor(Math.random() * symbol.length));
      }
      return password;
}

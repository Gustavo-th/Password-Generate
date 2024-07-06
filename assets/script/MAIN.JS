const input = document.querySelector(".passwords");
const btn_gerar = document.querySelector(".generate");
const btn_clear = document.querySelector(".clear");

function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
function setGeneratePassword() {
  input.value = generatePassword();
}
function clearPassword() {
  input.value = "";
}

function copyPassword() {
  if (input.value !== "") {
    navigator.clipboard.writeText(input.value);
    alert("Success!");
  } else {
    alert("Nothing to copy");
  }
}

btn_gerar.addEventListener("click", setGeneratePassword);
btn_clear.addEventListener("click", clearPassword);

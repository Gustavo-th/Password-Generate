const input = document.querySelector(".passwords");
const btn_gerar = document.querySelector(".generate");
const btn_copy = document.querySelector(".copy");

function generatePassword() {
  btn_gerar.addEventListener("click", function (e) {
    let randomPassword = Math.random().toString(36).slice(-8);
    input.value = randomPassword;
  });
}

function clearPassword() {
  const clearPassword = document.querySelector(".clear");
  clearPassword.addEventListener("click", function (e) {
    input.value = "";
  });
}

function copyPassword() {
  btn_copy.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
    alert("Sucessfully copied");
  });
}

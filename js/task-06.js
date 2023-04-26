const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", checkLength);

function checkLength() {
  if (inputText.value.length != inputText.dataset.length) {
    if (inputText.classList.contains("valid")) {
      inputText.classList.replace("valid", "invalid");
    } else {
      inputText.classList.add("invalid");
    }
  } else {
    if (inputText.classList.contains("invalid")) {
      inputText.classList.replace("invalid", "valid");
    } else {
      inputText.classList.add("valid");
    }
  }
}

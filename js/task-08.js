const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Por favor llene todos los campos solicitados!");
  }
  const loginData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(loginData);
  event.currentTarget.reset();
}

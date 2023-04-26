const display = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  display.textContent=counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  display.textContent=counter;
});

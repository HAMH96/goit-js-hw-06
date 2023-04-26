function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", () => createBoxes(inputNumber.value));
btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  // console.log("DESTRUIR CAJAS!");
  inputNumber.value = "";
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  if (amount > 0) {
    let boxesMarkup = "";
    const initialWidth = 30;
    const initialHeight = 30;
    // console.log(`Creando ${inputNumber.value} cajas...`);
    for (let i = 0; i < amount; i++) {
      // console.log(`Dibujando caja ${i}`);
      boxesMarkup += `<div style=
      "background-color:${getRandomHexColor()};
      width:${initialWidth + 10 * i}px;
      height:${initialHeight + 10 * i}px">
      </div>`;
    }
    boxes.insertAdjacentHTML("beforeend", boxesMarkup);
  }
}

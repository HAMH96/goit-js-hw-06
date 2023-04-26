let slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
slider.addEventListener("change", changeFontSize);
function changeFontSize() {
    text.style.fontSize = slider.value+"px";
}
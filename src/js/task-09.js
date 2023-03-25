function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnColor = document.querySelector(`.change-color`);
const colorName = document.querySelector(`.color`);

btnColor.addEventListener(`click`, function () {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorName.toggleAttribute = color;
})
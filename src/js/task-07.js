const newFontSize = document.querySelector(`#font-size-control`);

const textSize = document.querySelector(`#text`);

newFontSize.addEventListener(`input`, (event) => {
    let newSize = event.target.value;
    textSize.style.fontSize = `${newSize}px`;
});
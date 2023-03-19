const inputeText = document.querySelector(`#name-input`);
const outpputText = document.querySelector(`#name-output`);

const newOutput = (event) => {
    outpputText.textContent = event.currentTarget.value.trim();
    if (outpputText.textContent.length === 0) {
        outpputText.textContent = "Anonymous";
    }
}

inputeText.addEventListener(`input`, newOutput);
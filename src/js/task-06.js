const validInp = document.querySelector(`#validation-input`);
console.log(validInp);

const inpBorder = document.querySelector(`#validation-input.valid`);
console.log(inpBorder);

let inpLength = 0;

const makeInp = (event) => {
    if (inpLength === Number(validInp.getAttribute(`data-length`))) {
        event.target.classList.remove(`invalid`);
        event.target.classList.add(`valid`);
    } else {
        event.target.classList.remove(`valid`);
        event.target.classList.add(`invalid`);
    }
}

validInp.addEventListener(`inpute`, (event) => {
    inpLength = event.currentTarget.value.length; 
})

validInp.addEventListener(`blur`, makeInp);


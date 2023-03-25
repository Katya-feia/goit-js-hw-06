const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
let counterEl = document.querySelector("#value");
  let counterValue = 0;
  btnDecr.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  });
  btnIncr.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
  });
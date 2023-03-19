const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liEl = document.querySelector("#ingredients");

const newItem = (elements) => {
  return elements.map((element) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = element;
    return item;
  });
};

const itList = newItem(ingredients);
liEl.append(...itList);

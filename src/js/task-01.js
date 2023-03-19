const categElement = document.querySelector("#categories")
const items = categElement.querySelectorAll(".item");

console.log(`Number of categories: ${items.length})`);

items.forEach((item) => {
    const title = item.querySelector("h2");
    const elItems = item.querySelectorAll("li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elItems.length}`);
}
    
)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-delete]");
const boxes = document.querySelector("#boxes")

function createBoxes(amount) { 
  let size = 30;

  for (let i = 0; i < amount; i += 1) { 
    const box = document.createElement("div")
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.background = getRandomHexColor()

    boxes.append(box)
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = ''
}


createBtn.addEventListener("click", () => { 
  createBoxes(input.value)
})

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
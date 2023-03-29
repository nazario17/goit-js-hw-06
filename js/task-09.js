function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");  

btn.addEventListener("click", () => { 
  const color = getRandomHexColor();
  document.body.style.background = color;
  textColor.textContent = color;
  console.log(color);
})
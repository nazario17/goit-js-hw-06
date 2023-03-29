const input = document.querySelector("#name-input");
const header = document.querySelector("#name-output");

input.addEventListener("input", () => { 
    header.textContent = input.value || "Anonymous";
})

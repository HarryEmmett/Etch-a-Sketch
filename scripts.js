const GRIDSIZE = 9;
let active = false;
let activeColor = "black";

const div = document.querySelector(".container");
const colourPicker = document.querySelector(".colour-picker");

const createGrid = (num) => {
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.style.height = `${350 / num}px`;
      square.style.width = `${350 / num}px`;
      row.appendChild(square);
    }
    div.appendChild(row);
  }
};

createGrid(GRIDSIZE);

colourPicker.addEventListener("input", (e) => {
    activeColor = e.target.value;
});

div.addEventListener("click", (e) => {
  active = !active;

  div.addEventListener("mouseover", (e) => {
    if (active) {
        // works but this is setting the entire backgroud black??
      e.target.style.backgroundColor = activeColor;
    }
  });
});

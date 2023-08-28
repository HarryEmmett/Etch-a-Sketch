const GRIDSIZE = 16;
let active = false;
let activeColor = "black";

const div = document.querySelector(".container");
const colourPicker = document.querySelector(".colour-picker");
const resetButton = document.querySelector(".reset-button");
const gridSize = document.querySelector(".grid-size");

const createGrid = (num) => {
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.height = `${350 / num}px`;
      square.style.width = `${350 / num}px`;
      row.appendChild(square);
    }
    div.appendChild(row);
  }
};

createGrid(GRIDSIZE);

const squares = document.querySelectorAll(".square");

// gridSize.addEventListener("click", (e) => {
//   console.log(e.target.value);
// }); 

colourPicker.addEventListener("input", (e) => {
    activeColor = e.target.value;
});

resetButton.addEventListener("click", (e) => {
  squares.forEach((sq) => {
    sq.style.backgroundColor = "white";
  })
})

div.addEventListener("click", (e) => {
  active = !active;

  squares.forEach((sq) => {
    sq.addEventListener("mouseover", (e) => {
      if(active) {
        e.target.style.backgroundColor = activeColor;
      }
    })
  })
});

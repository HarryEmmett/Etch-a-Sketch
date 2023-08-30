const DEFAULT_GRIDSIZE = 16;

let active = false;
let activeColour = "black";
let rainbowColourMode = false;
let newGridSize;

const canvas = document.querySelector(".squares-container");
const colourPicker = document.querySelector(".colour-picker");
const resetButton = document.querySelector(".reset-button");
const gridScroll = document.querySelector(".grid-range-scroll");
const rainbowModeButton = document.querySelector(".rainbow-button");
const newGridButton = document.querySelector(".grid-button");
const rangeScrollBar = document.querySelector(".grid-range-scroll");

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
    canvas.appendChild(row);
  }
};

gridScroll.addEventListener("click", (e) => {
  newGridSize = e.target.value;
  newGridButton.innerText = `Create ${e.target.value}x${e.target.value}`;
});

newGridButton.addEventListener("click", (e) => {
  canvas.innerHTML = "";
  createGrid(parseInt(newGridSize));
  active = false;
});

colourPicker.addEventListener("input", (e) => {
  if (rainbowColourMode) {
    rainbowModeButton.style.backgroundColor = "lightgray";
    rainbowModeButton.style.color = "black";
  }
  activeColour = e.target.value;
  rainbowColourMode = false;
});

resetButton.addEventListener("click", (e) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.style.backgroundColor = "white";
  });
  newGridSize = undefined;
  active = false;
  rangeScrollBar.value = 16;
  newGridButton.innerText = `New Grid`;
});

rainbowModeButton.addEventListener("click", (e) => {
  rainbowColourMode = !rainbowColourMode;
  
  if (rainbowColourMode) {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
  } else {
    e.target.style.backgroundColor = "lightgray";
    e.target.style.color = "black";
  }
});

canvas.addEventListener("click", (e) => {
  active = !active;
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", (e) => {
      if (active) {
        if (rainbowColourMode) {
          const colour = ["red", "pink", "purple", "cyan", "magenta"];
          e.target.style.backgroundColor =
            colour[Math.floor(Math.random() * 5)];
        } else {
          e.target.style.backgroundColor = activeColour;
        }
      }
    });
  });
});

window.onload = () => {
  createGrid(DEFAULT_GRIDSIZE);
};

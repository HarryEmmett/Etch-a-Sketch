const DEFAULT_GRIDSIZE = 16;
let active = false;
let activeColour = "black";
let rainbowColour = false;

const div = document.querySelector(".container");
const colourPicker = document.querySelector(".colour-picker");
const resetButton = document.querySelector(".reset-button");
const gridScroll = document.querySelector(".grid-range-scroll");
const rainbowMode = document.querySelector(".rainbow-button");

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

createGrid(DEFAULT_GRIDSIZE);

const gridRangeIndicator = document.querySelector(".grid-range-indicator");
const newGridButton = document.querySelector(".grid-button");

gridScroll.addEventListener("click", (e) => {
  gridRangeIndicator.innerText = e.target.value;
});

newGridButton.addEventListener("click", (e) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  createGrid(parseInt(gridRangeIndicator.innerText));
  active = false;
  rainbowColour = false;
});

colourPicker.addEventListener("input", (e) => {
  activeColour = e.target.value;
  rainbowColour = false;
});

resetButton.addEventListener("click", (e) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.style.backgroundColor = "lightgray";
  });
  active = false;
  rainbowColour = false;
  activeColour = "black";
});

rainbowMode.addEventListener("click", (e) => {
  rainbowColour = true;
});

div.addEventListener("click", (e) => {
  active = !active;
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", (e) => {
      if (active) {
        if (rainbowColour) {
          const colour = ["red", "pink", "purple", "cyan", "magenta"];
          e.target.style.backgroundColor =
            colour[Math.floor(Math.random() * (5 - 0))];
        } else {
          e.target.style.backgroundColor = activeColour;
        }
      }
    });
  });
});

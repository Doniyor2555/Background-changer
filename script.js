const btn = document.querySelector('#btn'),
      color = document.querySelector(".color");


let colorsMixins = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", 'B', 'C', "D", "E", "F"];

btn.addEventListener("click", () => {
  let mixColors = generateRandomColor();
  document.body.style.backgroundColor = mixColors;
  color.textContent = mixColors;  
});

function generateRandomColor(){
  let mixin = "#";
  for(let i = 0; i < 6; i++){
    mixin +=colorsMixins[getRandomColors()]
  }
  return mixin;
}

function getRandomColors(){
  return Math.floor(Math.random() * colorsMixins.length);
}

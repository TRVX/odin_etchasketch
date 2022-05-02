const parentContainer = document.getElementById("container");
const pixels = document.getElementsByClassName("px");
const changeGridButton = document.getElementById("change-grid");

function divSetup(gridAmount) {

  for (let i = 0; i < parseInt(gridAmount); i++) {

    let pixel = document.createElement("div")
    parentContainer.append(pixel)
    pixel.classList.add("px");

  }

}

changeGridButton.addEventListener("click", function askUserInput() {

  var userInputGridAmount = prompt("How many pixels do you want?:");
  divSetup(userInputGridAmount);
  for (let i = 0; i < pixels.length; i++) {

    pixels[i].addEventListener("mouseover", function mouseOver() {
      pixels[i].style.backgroundColor = "#000080";

    });

  }

})

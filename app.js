const parentContainer = document.getElementById("container");
const pixels = document.getElementsByClassName("px");
const changeGridButton = document.getElementById("change-grid");
const r = document.querySelector(":root");

function divSetup(gridAmount) {
	r.style.setProperty("--grid-columns", Math.sqrt(parseInt(gridAmount)));

  for (let i = 0; i < parseInt(gridAmount); i++) {

    let pixel = document.createElement("div");
    parentContainer.append(pixel);

    pixel.classList.add("px");

  }

}

function mouseOver(event) {
	event.target.style.backgroundColor = "#000080";
}

changeGridButton.addEventListener("click", function askUserInput() {

  var userInputGridAmount = prompt("How many pixels do you want?:");
  divSetup(userInputGridAmount);

  parentContainer.addEventListener("mouseover", mouseOver);

})

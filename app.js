const parentContainer = document.getElementById("container");

function divSetup() {

  for (let i = 0; i < 256; i++) {

    let pixel = document.createElement("div")
    parentContainer.append(pixel)
    pixel.classList.add("px");

  }

}

divSetup();

const pixels = document.getElementsByClassName("px");

for (let i = 0; i < pixels.length; i++) {

  pixels[i].addEventListener("mouseover", function mouseOver() {
    pixels[i].style.backgroundColor = "#000080";

  });

}

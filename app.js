const parentContainer = document.getElementById("container");

function divSetup() {

  for (let i = 0; i < 256; i++) {

    let pixel = document.createElement("div")
    parentContainer.append(pixel)
    pixel.classList.add("px");

  }

}

divSetup();

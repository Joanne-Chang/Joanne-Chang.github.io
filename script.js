// credit @Joanne-Chang on GitHub

function expandHobbySection() {
  var section = document.getElementById("hobbySection");
  var buttonText = document.getElementById("hobbyButton");
  
  if (section.style.display != "flex") {
    section.style.display = "flex";
    buttonText.innerHTML = "Hide images";
  } else {
    section.style.display = "none";
    buttonText.innerHTML = "Show images";
  }
}

// For small screens only,
// Remove the extra &nbsp; space in the header
if (screen.width < 600) {
  document.getElementById("school").innerHTML = "@ UC Davis";
}

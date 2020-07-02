// window.onscroll = function() {myFunction()};

// var header = document.getElementById("headerTabs");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

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

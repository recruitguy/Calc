let x = 0;

function sidebar() {
    if (x == 0) {
      document.getElementById("leftiframe").style.width = "250px";
      x = 1;
    } else {
      document.getElementById("leftiframe").style.width = "0";
      x = 0;
    }
}


//Spizheniy code from W3Schools tutorial on how to make accordion//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
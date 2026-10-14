let x = 0;

function sidebar() {
    if (x === 0) {
        document.getElementById("leftiframe").style.width = "250px";
        x = 1;
    } else {
        document.getElementById("leftiframe").style.width = "0";
        x = 0;
    }
}
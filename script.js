var colorBg;
var colorText;

function storeBG() {
  colorBg = document.getElementById("myColor");
  colorBg = colorBg.value;
}

function titel() {
  colorText = document.getElementById("myColor");
  colorText = colorText.value;
}

function update() {
  document.getElementById("text").style.color = colorText;
  document.getElementById("color").style.backgroundColor = colorBg;
}

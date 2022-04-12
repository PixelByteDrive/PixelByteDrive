const para = document.createElement("meta");
const node = para.createAttribute("name");
const theme = para.createAttribute("content");
para.setAttribute("name", "theme-color")

const element = document.getElementById("html");
element.appendChild(para);

function getRandomRGBValue() {
  return Math.min(Math.floor(Math.random() * 255 + 1), 255);
}

function getRandomColor() {
  var r = getRandomRGBValue(),
    g = getRandomRGBValue(),
    b = getRandomRGBValue();
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function changeThemeColor() {
  para.setAttribute("content", getRandomColor());
  setTimeout(function () {
    changeThemeColor();
  }, 3000);
}

changeThemeColor();
var open = false;
document.getElementById("logo").addEventListener("click", function() {
  if (open == false) {
    open = true;
    document.getElementById("maintext").style.width = "90%";
    document.getElementById("sidebar").style.opacity = "1";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("logo").style.transform = "rotateY(360deg)";
  } else {
    open = false;
    document.getElementById("maintext").style.width = "90%";
    document.getElementById("sidebar").style.opacity = "0";
    document.getElementById("sidebar").style.visibility = "hidden";
    document.getElementById("logo").style.transform = "rotateY(0deg)";
  }
});
document.getElementsByClassName()
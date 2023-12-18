// LUMINENCE CALCULATOR
//Event Listener
document.getElementById("calculate").addEventListener("click", calOfLuminance);
//Input
function calOfLuminance() {
  let rd = +document.getElementById("red").value;
  let grn = +document.getElementById("green").value;
  let blu = +document.getElementById("blue").value;

  //OutPut
  let luminance = Math.sqrt(
    0.299 * rd ** 2 + 0.587 * grn ** 2 + 0.114 * blu ** 2
  );
  document.getElementById("result").innerHTML = luminance;
}

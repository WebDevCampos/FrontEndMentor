const tenK = document.querySelector(".tenK");
const twelveM = document.querySelector(".twelveM");
const moreThan300 = document.querySelector(".moreThan300");
const roll = setInterval(() => {
  tenK.textContent++;
  tenK.textContent == 10 ? clearInterval(roll) : null;
}, 100);

const roll2 = setInterval(() => {
  moreThan300.textContent++;
  moreThan300.textContent == 314 ? clearInterval(roll2) : null;
}, 1);
const roll3 = setInterval(() => {
  twelveM.textContent++;
  twelveM.textContent == 12 ? clearInterval(roll3) : null;
}, 100);

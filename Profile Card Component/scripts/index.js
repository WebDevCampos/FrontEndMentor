const numbers = document.querySelectorAll(".card__bottom h2 span");
const myArray = [80, 803, 1400];

numbers.forEach((number, index) => {
  const roll = setInterval(() => {
    number.innerText++;
    number.innerText == myArray[index] ? clearInterval(roll) : null;
    number.innerText == 1400 ? (number.innerText = 1.4) : "";
  }, 1);
  number.addEventListener("click", () => {
    number.innerText = myArray[index];
    console.log(typeof myArray[index]);
  });
});

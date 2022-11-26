const dice = document.querySelector(".dice");
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text");
const generateRandomSentence = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerText = data.slip.id;
      adviceText.innerHTML = `&ldquo;<em>${data.slip.advice}</em>&rdquo;`;
      console.log(data);
    });
};

dice.addEventListener("click", generateRandomSentence);

window.onload = generateRandomSentence();

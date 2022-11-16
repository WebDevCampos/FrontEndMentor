const innerCard = document.querySelector(".inner-card");
const value = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector("form");
const finalRating = document.querySelector(".final-rating");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(value[0].validity, value);
  value.forEach((item) => {
    const valueIsSelected = item.value == e.target.rating.value;
    if (valueIsSelected) {
      finalRating.innerText = item.value;
      innerCard.style.transform = "rotateY(180deg)";
    }
  });
});

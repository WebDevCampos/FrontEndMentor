const dayName = document.querySelector(".day-name");
const dayInfo = document.querySelector(".day-info");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let x of data) {
      const dayAmount = document.createElement("div");
      const weekDay = document.createElement("div");
      const tooltip = document.createElement("div");

      tooltip.setAttribute("class", "tooltip");
      dayAmount.setAttribute("class", "day-amount");
      dayName.append(weekDay);
      dayInfo.append(dayAmount);

      dayAmount.style.cssText = `height:${x.amount}%;  `;
      weekDay.textContent += `${x.day}`;

      dayAmount.addEventListener("mouseenter", () => {
        dayAmount.append(tooltip);
        tooltip.textContent = `${x.amount}%`;
      });
      dayAmount.addEventListener("mouseleave", () => {
        tooltip.textContent = "";
      });
    }
  });

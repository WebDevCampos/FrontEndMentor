const burguerMenuButton = document.querySelector(".icon");
const sideNav = document.querySelector(".sidenav");
const closeWhenResize = () => {
  if (window.innerWidth > 768) {
    sideNav.classList.remove("open");
  }
};
const closeWhenXIsClicked = () => {
  sideNav.classList.add("open");

  sideNav.addEventListener("click", (e) => {
    e.target.classList.contains("closenav")
      ? sideNav.classList.remove("open")
      : "";
  });
};
window.addEventListener("resize", closeWhenResize);

burguerMenuButton.addEventListener("click", closeWhenXIsClicked);

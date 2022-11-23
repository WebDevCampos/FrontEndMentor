/*Navbar dropdowns arows and contents (Screen size >= 900px)*/
const features = document.querySelector(".feat");
const featContent = document.querySelector(".feat__content");
const arrowUp = document.querySelector(".feat__arrow--up");
const arrowDown = document.querySelector(".feat__arrow--down");
const company = document.querySelector(".company");
const companyContent = document.querySelector(".company__content");
const companyArrowUp = document.querySelector(".company__arrow--up");
const companyArrowDown = document.querySelector(".company__arrow--down");

features.addEventListener("click", (e) => {
  arrowUp.classList.toggle("hide");
  arrowDown.classList.toggle("hide");
  featContent.classList.toggle("hide");
});

company.addEventListener("click", () => {
  companyArrowUp.classList.toggle("hide");
  companyArrowDown.classList.toggle("hide");
  companyContent.classList.toggle("hide");
});
/*Navbar dropdowns arows and contents (Screen size > 900px)*/

/*Sidenav show, hide and close. Screen size <= 900*/
const openMenuBtn = document.querySelector(".open__menu--btn");
const closeMenuBtn = document.querySelector(".close__menu--btn img");
const aside = document.querySelector("aside");
const sideNav = document.querySelector(".sidenav");

openMenuBtn.addEventListener("click", () => {
  aside.classList.remove("fade");
  aside.classList.add("show");
  sideNav.classList.add("expand");
  sideNav.classList.remove("shrink");
});

sideNav.addEventListener("click", (e) => {
  const anchors = document.querySelectorAll("a");
  for (let anchor of anchors) {
    const sideNavItemIsClicked =
      e.target == anchor ||
      e.target == closeMenuBtn ||
      e.target.parentElement == anchor;

    if (sideNavItemIsClicked) {
      aside.classList.remove("show");
      aside.classList.add("fade");
      sideNav.classList.remove("expand");
      sideNav.classList.add("shrink");
    }
  }
});
/*Sidenav show, hide and close. Screen size <= 900px*/

/*Close sidenav when resize screen back to >= 900px */
const closeWhenResize = () => {
  if (window.innerWidth >= 900) {
    aside.classList.remove("show");
    sideNav.classList.remove("expand");
  }
};

window.addEventListener("resize", closeWhenResize);
/*Close sidenav when resize screen back to >= 900px */

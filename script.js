// BURGER-MENUEN # betyder ID hvis det er et . = class//

const burger = document.querySelector("#burger_knap");
const nav = document.querySelector("#ul_text");

burger.addEventListener("click", () => {
  nav.classList.toggle("menu_open");
  burger.classList.toggle("burger_open");
});

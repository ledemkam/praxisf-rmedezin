const menubtn = document.querySelector("#menu_bars");
const mynav = document.querySelector(".navbar");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("fa-times");
  mynav.classList.toggle("active");
});

const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

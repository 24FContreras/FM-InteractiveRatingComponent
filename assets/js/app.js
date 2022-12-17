const ratingWindow = document.querySelector("#ratingWindow");
const thankyouWindow = document.querySelector("#thankyouWindow");
const ratingForm = document.querySelector("#ratingForm");
const finalRating = document.querySelector("#finalRating");
const reviewBtn = document.querySelector("#reviewBtn");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ratingValue = document.querySelector(
    "input[name='rating']:checked"
  ).value;

  ratingWindow.classList.add("d-none");
  thankyouWindow.classList.remove("d-none");
  finalRating.textContent = ratingValue;
});

reviewBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

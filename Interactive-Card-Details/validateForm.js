const cardNumber = document.querySelector('[name="card-number"]');
const cardName = document.querySelector('[name="name"]');
const errorMessage = document.querySelector("#number-error");
const errorMessageDate = document.querySelector("#date-error");
const [month, year] = document.querySelectorAll(".short");
const form = document.querySelector("form");
const cardFrontNumber = document.querySelector("#card-number-value-image");
const cardFrontName = document.querySelector("#card-number-name-image");
const cardFrontDate = document.querySelector("#card-number-date-image");
const regExp = /[a-zA-Z]/;
let date = {
  month: month.value,
  year: year.value,
};

form.onsubmit = (e) => {
  e.preventDefault();
};

cardName.oninput = () => {
  cardFrontName.innerText = cardName.value.toUpperCase();
};

cardNumber.oninput = () => {
  validateCardNumber();
  changeFront();
};

const validateCardNumber = () => {
  if (regExp.test(cardNumber.value)) {
    errorMessage.classList.add("error_visible");
  } else errorMessage.classList.remove("error_visible");
};

const changeFront = () => {
  cardFrontNumber.innerText = cardNumber.value;
};

month.oninput = () => {
  date.month = month.value;
  if (month.value.length == 0) {
    errorMessageDate.classList.add("error_visible");
  } else errorMessageDate.classList.remove("error_visible");
  checkDate();
};

year.oninput = () => {
  date.year = year.value;
  if (year.value.length == 0) {
    errorMessageDate.classList.add("error_visible");
  } else errorMessageDate.classList.remove("error_visible");

  checkDate();
};

const checkDate = () => {
  if (date.month != "" && date.year != "") {
    cardFrontDate.innerText = `${date.month}/${date.year}`;
  } else {
    cardFrontDate.innerText = "";
  }
};

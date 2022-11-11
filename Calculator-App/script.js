const numberButtons = document.querySelectorAll("[data-number]");
const resetButton = document.querySelectorAll("[data-reset]");
const opButton = document.querySelectorAll("[data-op]");
const equalButton = document.querySelectorAll("[data-equal]");
const resultP = document.getElementById("result-number");
const removeButton = document.querySelectorAll("[data-remove]");
const dec = document.querySelectorAll("[data-dec]");
const changer = document.getElementById("changeTheme");
const toggle = document.getElementById("custom-toggle");

const init = () => {
  return localStorage.getItem("activeTheme");
};

const changeTheme = (themeState, lastTheme) => {
  localStorage.setItem("activeTheme", themeState);
  toggle.value = themeState;
  document.querySelector("body").classList.remove(`theme${lastTheme}`);
  document.querySelector("body").classList.add(`theme${themeState}`);
};
var themeState = init();
themeState ? changeTheme(themeState) : 1;

let numberOfOperations = 0;
let pileOfOperations = [];
let pileOfNumbers = [];
let firstCalcs = true;
let splitUp = "";
let res = 0;

let lastTheme = themeState;

toggle.addEventListener("change", function (e) {
  lastTheme = themeState;
  themeState = e.target.value;
  themeState = parseInt(themeState);
  changeTheme(themeState, lastTheme);
});

changer.addEventListener("click", changeTheme);

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    updateDisplay(number.innerHTML);
  });
});

opButton.forEach((number) => {
  number.addEventListener("click", () => {
    updateDisplay(number.innerHTML);
  });
});
resetButton[0].addEventListener("click", () => {
  reset();
});
equalButton[0].addEventListener("click", () => {
  calculate();
});
removeButton[0].addEventListener("click", () => {
  if (firstCalcs) {
    if (resultP.innerHTML.length > 1)
      resultP.innerText = resultP.innerText.slice(0, -1);
    else if (resultP.innerHTML.length === 1) {
      resultP.innerText = "0";
    }
  }
});

dec[0].addEventListener("click", () => {
  updateDisplay(".");
});

function updateDisplay(newContent) {
  if (resultP.innerHTML === "0" && newContent != "-" && newContent != ".") {
    resultP.innerHTML = newContent;
  } else {
    resultP.innerHTML += newContent;
  }
}

function reset() {
  resultP.innerHTML = "0";
  console.log("reset action");
  firstCalcs = true;
}

function calculate() {
  if (firstCalcs) {
    splitUp = resultP.innerHTML.match(/[^\d()]+|[\d.]+/g);
  } else {
    newInput = resultP.innerHTML.replace(res.toString(), "");
    splitAux = newInput.match(/[^\d()]+|[\d.]+/g);
    splitUp = [res.toString()].concat(splitAux);
  }

  console.log(splitUp);
  parseNumbers(splitUp);
  operateNumbers(splitUp);
}

function parseNumbers(splitUp) {
  splitUp.forEach((item, index) => {
    if (index % 2 == 0) {
      if (!item.includes(".")) splitUp[index] = parseInt(item);
      else splitUp[index] = parseFloat(item);
    }
  });

  console.log("All numbers parsed");
}

function operateNumbers(splitUp) {
  numberOfOperations = 0;
  pileOfOperations = [];
  pileOfNumbers = [];

  splitUp.forEach((item) => {
    if (typeof item === "string") {
      numberOfOperations += 1;
      pileOfOperations.push(item);
    } else if (typeof item === "number") {
      pileOfNumbers.push(item);
    }
  });

  if (pileOfNumbers.length === 1) {
    reset();
    return;
  }

  let res = 0;
  for (let i = 0; i < numberOfOperations; i++) {
    if (i === 0) {
      res = pileOfNumbers[0];
    }

    res = calculateNumbers(res, pileOfOperations[i], pileOfNumbers[i + 1]);
  }

  resultP.innerHTML = res.toString();
  firstCalcs = false;
}

function calculateNumbers(number1, operator, number2) {
  switch (operator) {
    case "+":
      res = number1 + number2;
      break;
    case "-":
      res = number1 - number2;
      break;
    case "/":
      res = number1 / number2;
      break;
    case "x":
      res = number1 * number2;
      break;
  }
  if (res % 1 != 0) {
    res = res.toFixed(2);
  }
  console.log(number1, operator, number2, " = ", res);

  return res;
}

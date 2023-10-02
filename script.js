const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");
const minus = document.querySelector(".minus");
const devide = document.querySelector(".devide");
const times = document.querySelector(".times");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const math = document.querySelectorAll(".math");

numbers.forEach((num) =>
  num.addEventListener("click", function () {
    new Audio("button.mp3").play();
    const number = num.dataset.value;
    display.value += +number;
  })
);
/*plus.addEventListener("click", function () {
  display.value += "+";
});
equal.addEventListener("click", function () {
  display.value = eval(display.value);
});
minus.addEventListener("click", function () {
  display.value += "-";
});
devide.addEventListener("click", function () {
  display.value += "/";
});
times.addEventListener("click", function () {
  display.value += "*";
});
dot.addEventListener("click", function () {
  display.value += ".";
});
clear.addEventListener("click", function () {
  display.value = "";
});*/
math.forEach((m) =>
  m.addEventListener("click", function () {
    new Audio("button.mp3").play();
    if (m.textContent === "-") {
      display.value += "-";
    }
    if (m.textContent === "+") {
      display.value += "+";
    }
    if (m.textContent === "*") {
      display.value += "*";
    }
    if (m.textContent === "/") {
      display.value += "/";
    }
    if (m.textContent === "=") {
      const value = eval(display.value);
      const fixedValue = +value.toFixed(3); //3 tizedes jegyik irja a szamot
      display.value = fixedValue;
    }
    if (m.textContent === "Clear") {
      display.value = "";
    }
    if (m.textContent === ".") {
      display.value += ".";
    }
  })
);
console.log("szia");
console.log("helo");

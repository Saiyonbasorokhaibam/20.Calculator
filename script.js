const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("number")) {
      currentInput += value;
      display.textContent = currentInput;
    } else if (btn.classList.contains("operator")) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (btn.classList.contains("equals")) {
      if (previousInput && currentInput) {
        display.textContent = eval(
          previousInput + operator.replace("×","*").replace("÷","/")
          + currentInput
        );
        currentInput = display.textContent;
        previousInput = "";
      }
    } else if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.textContent = "0";
    } else if (value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    }
  });
});

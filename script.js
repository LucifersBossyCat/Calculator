let expression = "";

function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    // Replace ^ with ** for exponentiation
    let result = eval(expression.replace(/\^/g, '**'));
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}
